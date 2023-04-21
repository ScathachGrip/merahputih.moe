import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Merahputih.moe UwU</title>

        <meta
          name="description"
          content="Get your own subdomain which is pretty 'moh-ay' merahputih.moe UwU"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF0000" />
        <meta property="og:image" content="/img/mohay.jpg" />
        <meta name="author" content="ScathachGrip" />


        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen justify-center bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 py-20">
        <div>

          <div className="flex justify-center">
            <Image src="/img/moe.jpg" width={830} height={500} style={{ borderRadius: "1rem" }} title="merahputih.moe" alt="merahputih.moe" />
          </div>

          <h1 className="px-5 text-center text-4xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-6xl">
            <u>merahputih.moe</u>
          </h1>

          <h2 className="mx-auto mt-8 max-w-4xl px-10 text-center text-base tracking-tight text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            Are you weeb developer looking for free webspace to host your project?
            <br />
            Get subdomain pretty "moh-ay" <b>merahputih.moe</b> UwU
          </h2>
          <br />

          <h5 className="mx-auto mt-8 max-w-4xl px-10 text-center text-base tracking-tight text-gray-600 sm:text-1xl md:mt-5 md:text-1xl">
            Taking inspiration from the generous <a href="https://js.org"><b>JS.ORG</b></a> project and <a href="https://merahputih.id/"><b>Merahputih.id</b></a>'s vibes we at <a href="https://github.com/ScathachGrip"><b>@ScathachGrip</b></a> thought of giving something back to the
            weeb developers: a free, sleek, and themost important is "moh-ay" URL where you can host a free website or documentation for your project UwU.
          </h5>

          <div className="px-4 sm:px-0">
            <section
              className="mt-6 grid min-h-[350px] w-full grid-cols-1 rounded-lg bg-white sm:mt-20 sm:min-w-[1000px] sm:grid-cols-2"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center rounded-l-lg bg-gray-50">
                <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
                  What's the purpose? UwU
                </div>
                <FeatureList>
                  <Feature main="Moe">
                    Moeify your website of course
                  </Feature>

                  <Feature main="Docs">
                    Build documentaion to your project
                  </Feature>

                  <Feature main="Web">
                    Build your website application
                  </Feature>

                  <Feature main="Community">
                    Build your company or community profile
                  </Feature>

                  <Feature main="Blog">
                    Build portfolio, blog, and anything else
                  </Feature>

                  <Feature main="Global">
                    Not indonesian? Yes you can use this too!
                  </Feature>

                  <Feature main="Other">
                    <Image src="/emoji/megachan_no.png" style={{ borderRadius: "50%" }} width={50} height={50} title=":megachan_no:" alt=":megachan_no:" />
                    Just don't make it as scampage
                  </Feature>
                </FeatureList>
              </div>

              <div className="space-y-5 place-self-center px-4 py-24 text-center">
                <div className="flex justify-center">
                  <Image src="/img/mohay.jpg" style={{ borderRadius: "50%" }} width={300} height={300} title="mohay" alt="mohay" />
                </div>
                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="https://github.com/ScathachGrip/merahputih.moe">
                    <a
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-4 font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 active:bg-blue-700 sm:px-10"
                    >
                      Stars, Forks, and Get started
                    </a>
                  </Link>
                </span>
              </div>
            </section>

            <h5 className="mx-auto mt-8 max-w-4xl px-10 text-center text-base tracking-tight text-black-600 sm:text-1xl md:mt-5 md:text-1xl">
              <b>EOF</b>: <u>merahputih.moe</u> and <u>merahputih.id</u> are completely different, we don't provide any email service or such.
            </h5>

          </div>
        </div>
      </main>
    </div>
  );
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="space-y-5 px-12 py-12">{children}</ul>;
}

function Feature({ children, main }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="hiddden hidden h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:inline" />
      <p className="ml-3 hidden text-lg text-gray-600 sm:inline">{children}</p>

      <p className="mx-auto sm:hidden">
        <InfoText text={main} />
      </p>
    </li>
  );
}

function InfoText({ text }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 font-medium text-gray-700">
      <CheckIcon className="mr-3 inline-flex h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:hidden" />
      {text}
    </span>
  );
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
