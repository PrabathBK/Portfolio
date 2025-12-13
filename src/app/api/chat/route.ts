import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { personalInfo, education, experience, awards, certifications, skills, news, extraCurricular, sportsActivities, recommendations, conferences } from '@/data/cv';
import { projects } from '@/data/projects';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Build comprehensive portfolio context
function buildPortfolioContext(): string {
    const projectsList = projects.map(p =>
        `- ${p.title} (${p.category}): ${p.summary}. Tech: ${p.techStack.join(', ')}`
    ).join('\n');

    const awardsList = awards.map(a =>
        `- ${a.title} (${a.date}): ${a.description}`
    ).join('\n');

    const experienceList = experience.map(e =>
        `- ${e.title} at ${e.organization} (${e.startDate} - ${e.endDate}): ${e.description}`
    ).join('\n');

    const educationList = education.map(e =>
        `- ${e.degree} at ${e.institution} (${e.startDate} - ${e.endDate})${e.gpa ? `, GPA: ${e.gpa}` : ''}`
    ).join('\n');

    const certList = certifications.map(c => `- ${c.title} (${c.organization})`).join('\n');

    const newsList = news.slice(0, 5).map(n =>
        `- ${n.title} (${n.date}): ${n.description}`
    ).join('\n');

    const extraList = extraCurricular.slice(0, 8).map(e =>
        `- ${e.title} at ${e.organization}`
    ).join('\n');

    const sportsList = sportsActivities.map(s =>
        `- ${s.title} (${s.organization})`
    ).join('\n');

    const recommendationsList = recommendations.map(r =>
        `- "${r.text}" - ${r.author}, ${r.position} at ${r.organization}`
    ).join('\n');

    const conferencesList = conferences.map(c =>
        `- ${c.title} (${c.date}): ${c.role}`
    ).join('\n');

    return `
You are an AI assistant for Prabath Wijethilaka's portfolio website. Answer questions about his background, projects, skills, and achievements helpfully and concisely.

## Personal Information
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- Website: ${personalInfo.website}
- GitHub: ${personalInfo.github}
- LinkedIn: ${personalInfo.linkedin}
- Summary: ${personalInfo.summary}
- Interests: ${personalInfo.interests.join(', ')}

## Education
${educationList}

## Work Experience
${experienceList}

## Projects (${projects.length} total)
${projectsList}

## Awards & Achievements (${awards.length} total)
${awardsList}

## Certifications (${certifications.length} total)
${certList}

## Skills
- Languages: ${skills.languages.join(', ')}
- Developer Tools: ${skills.developerTools.join(', ')}
- Frameworks: ${skills.frameworks.join(', ')}
- Databases: ${skills.databases.join(', ')}
- Operating Systems: ${skills.operatingSystems.join(', ')}
- Soft Skills: ${skills.softSkills.join(', ')}

## Recent News
${newsList}

## Extra-Curricular Activities
${extraList}

## Sports Activities
${sportsList}

## Recommendations
${recommendationsList}

## Conferences
${conferencesList}

## Response Guidelines
1. Be friendly, helpful, and professional
2. Keep responses concise but informative (2-4 sentences typically)
3. When mentioning projects, include relevant tech stack
4. Highlight achievements and awards when relevant
5. If asked about something not in the data, politely say you don't have that information
6. Use emojis sparingly to make responses engaging
7. Always refer to Prabath in third person
8. For project questions, you can mention the category and key technologies

## Contact Information Guidelines
When asked about contact information or "How can I contact Prabath?", provide:
- Email: ${personalInfo.email}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}
DO NOT mention the website/portfolio link (${personalInfo.website}) when answering contact questions.
`;
}

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message' },
                { status: 400 }
            );
        }

        if (!GEMINI_API_KEY) {
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        const portfolioContext = buildPortfolioContext();

        // Initialize the Gemini API client
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

        // Use gemini-1.5-pro-latest model
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 500,
            },
        });

        const prompt = `${portfolioContext}\n\n---\n\nUser Question: ${message}\n\nProvide a helpful, concise response:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const aiResponse = response.text() || "I'm sorry, I couldn't generate a response. Please try again!";

        return NextResponse.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
