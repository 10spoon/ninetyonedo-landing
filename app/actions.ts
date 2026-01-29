'use server';

import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function submitContact(formData: FormData) {
    console.log('--- Notion Submission Start ---');
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    console.log('Form Data:', { name, email, phone, message });

    if (!process.env.NOTION_API_KEY || !DATABASE_ID) {
        console.error('Environment variables missing:', {
            hasApiKey: !!process.env.NOTION_API_KEY,
            hasDatabaseId: !!DATABASE_ID,
        });
        return { success: false, error: '시스템 설정(환경 변수)이 완료되지 않았습니다.' };
    }

    try {
        console.log('Attempting to create Notion page in DB:', DATABASE_ID);
        const response = await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                '이름': {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                '이메일': {
                    email: email,
                },
                '연락처': {
                    phone_number: phone,
                },
                '프로젝트 설명': {
                    rich_text: [
                        {
                            text: {
                                content: message || '',
                            },
                        },
                    ],
                },
                '날짜': {
                    date: {
                        start: new Date().toISOString(),
                    },
                },
            },
        });

        console.log('Notion API Success! Page ID:', response.id);
        return { success: true };
    } catch (error: any) {
        console.error('Notion API Error Details:', {
            message: error.message,
            code: error.code,
            status: error.status,
            body: error.body,
        });
        return { success: false, error: `상담 신청 중 오류가 발생했습니다: ${error.message}` };
    } finally {
        console.log('--- Notion Submission End ---');
    }
}
