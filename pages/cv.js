import Link from 'next/link';
import Head from 'next/head';

export default function CV() {
  return (
    <div className="container mx-auto p-4 ">
      <Head>
        <title>C A G A T A V - CV</title>
        <meta name="description" content="CAGATAV" />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <h1 className="text-3xl font-bold mb-10 text-center text-[#903b3b]">My CV</h1>
      <div className="mb-4 text-center">
        <Link href="https://s2.dosya.tc/en2.php?a=server30/uqq5kr/EnesCagataySOZEN-CV.pdf&b=d7511eca727e9e38efa2fa1ae5bef85c&c=1717088300">
          <span className="bg-[#903b3b] text-white py-3 px-4 rounded hover:bg-[#6c2c2c] text-sm" target="_blank">Download CV (PDF)</span>
        </Link>
      </div>
      <div className="flex justify-center">
        <img src="CV.png" alt="CV Page 1" className="w-full h-auto" />
      </div>
    </div>
  );
}
