import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from '@sveltejs/kit';

const template = (name: String) => {
    return `
        <div tw="w-[1024px] h-[768px] flex relative bg-violet-300 border-2 border-black">
            <div tw="w-[1653px] h-[829px] flex left-[-429px] top-[-393px] absolute text-center text-zinc-950 opacity-10 text-[50px] font-black">
                010000100100 100101010100 00100000 01010011 01010000 0100 00010100 001101000101 01000010 0100 1001 01010100 00100000 01010011 01010000 01000001 0100 0011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 010000100100 100101010100 00100000 01010011 01010000 0100 00010100 001101000101 01000010 0100 1001 01010100 00100000 01010011 01010000 01000001 0100 0011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 010000100100 100101010100 00100000 01010011 01010000 0100 00010100 001101000101 01000010 0100 1001 01010100 00100000 01010011 01010000 01000001 0100 0011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 010000100100 100101010100 00100000 01010011 01010000 0100 00010100 001101000101 01000010 0100 1001 01010100 00100000 01010011 01010000 01000001 0100 0011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101 01000010 01001001 01010100 00100000 01010011 01010000 01000001 01000011 01000101
            </div>
            <div tw="w-[885px] flex flex-col items-center justify-around h-[639px] left-[69px] top-[65px] absolute bg-zinc-100 border-2 border-black">
                <div tw="w-full flex flex-col items-center mt-4 text-center text-black text-[50px] font-bold">
                    CERTIFICATE OF PARTICIPATION
                </div>
                <div tw="flex flex-col items-center justify-around w-[380px] h-[250px]">
                    <div tw="flex text-center text-black text-2xl font-bold">
                        This is to certify that
                    </div>
                    <div tw="w-[649px] flex flex-col items-center text-2xl border-b-2 border-black mt-12">${name}</div>
                    <div tw="flex flex-col items-center justify-center text-center text-black text-xl font-bold">
                        <div tw="flex flex-col items-center w-[1000px]">has attended Byte Con 100 : Introduction to Open Source</div>
                        <div tw="flex flex-col items-center w-[1000px]">conducted on 11/08/2023 in Chennai Institute of Technology</div>
                        <div tw="flex flex-col items-center w-[1000px]">by :bitspace</div>
                    </div>
                </div>
                <div tw="w-[649px] h-[90px] flex flex-row items-center justify-center">
                    <div tw="w-[90px] h-[90px] flex bg-black rounded-full">
                        <div tw="w-full h-full flex flex-col items-center justify-center text-white text-[36px] font-bold">
                            :bs
                        </div>
                    </div>
                    <div tw="flex text-center text-black text-2xl font-bold mx-24">
                        x
                    </div>
                    <img width="139" height="140" src="https://cdn.discordapp.com/attachments/1106935324556406866/1139027979666722898/youth_final-01.png" />
                </div>
            </div>
        </div>
`};

const fontFile = await fetch('https://cdn.discordapp.com/attachments/1089762776387420171/1122747833448157244/GlacialIndifference-Bold.otf');
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
    const name = url.searchParams.get('name') || 'Rahul M Navneeth';
    return await ImageResponse(template(name), {
        height: 768,
        width: 1024,
        fonts: [
            {
                name: 'Inter Latin',
                data: fontData,
                weight: 400
            }
        ]
    });
};
