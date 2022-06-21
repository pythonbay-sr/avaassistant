import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface PageProps {
    page: string,
    children: JSX.Element | JSX.Element[],
}

export default function Page(props: PageProps) {
    let setScrollable = (scroll: boolean) => {
        //
    };
    let [darken, setDarken] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue to-cyan flex flex-col">
            <Head>
                <title>{props.page}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="title" content="AvaAssistant - a bot with personality" />
                <meta name="description" content="A chat bot for Twitch that allows you moderate and interact with your viewers through commands and new features." />
                <meta name="keywords" content="commands, bot, twitch, avaassistant" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap" rel="stylesheet"/>
            </Head>
            <div className={(darken ? "" : "hidden") + " bg-black opacity-50 absolute z-10 w-full h-full inset-0"}></div>
            <div className="flex-grow pr-10 pl-10 sm:pr-12 sm:pl-12 md:pl-16 md:pr-16 lg:pr-20 lg:pl-20 xl:pr-24 xl:pl-24 2xl:pl-36 2xl:pr-36 flex flex-col">
                <Header page={props.page} set_scroll={setScrollable} set_darken={setDarken} />
                <div className="text-white pt-8 font-sans pb-28 flex-grow flex flex-col">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}