import Image from 'next/image';
import PythonLogo from '@/public/images/svg/Python-Logo.svg';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import FigmaLogo from '@/public/images/svg/figma-logo.svg';
import VercelLogo from '@/public/images/svg/Vercel-Logo.svg';
import DartLogo from '@/public/images/svg/dart.svg';
import DockerLogo from '@/public/images/svg/docker.svg';
import FirebaseLogo from '@/public/images/svg/firebase.svg';
import FlutterLogo from '@/public/images/svg/flutter.svg';
import GitLogo from '@/public/images/svg/git.svg';
import GoLogo from '@/public/images/svg/go.svg';
import MongodbLogo from '@/public/images/svg/mongodb.svg';
import NodeLogo from '@/public/images/svg/nodejs.svg';
import PostgresqlLogo from '@/public/images/svg/postgresql.svg';
import PrismaLogo from '@/public/images/svg/prisma-original.svg';

export const logos = [
  {
    src: GoLogo,
    alt: 'GO Logo',
    name: 'Go',
    width: 30,
    height: 30,
  },
  { 
    src: MongodbLogo,
     alt: 'Mongodb Logo', 
     name: 'MongoDB',
      width: 23,
       height: 23
       },
       {
        src: NodeLogo,
        alt: 'Node Logo',
        name: 'Node',
        width: 30,
        height: 30,
      },
      {
        src: PostgresqlLogo,
        alt: 'Postgresql Logo',
        name: 'PostgreSQL',
        width: 30,
        height: 30,
      },
      { 
        src: PrismaLogo,
         alt: 'Prisma Logo', 
         name: 'Prisma',
          width: 23,
           height: 23
           },
  { 
    src: ReactLogo,
     alt: 'React Logo',
      name: 'React',
       width: 30,
        height: 30 },
  {
    src: VercelLogo,
    alt: 'Vercel Logo',
    name: 'Next.js',
    width: 30,
    height: 30,
  },
  {
    src: TypescriptLogo,
    alt: 'TypeScript Logo',
    name: 'TypeScript',
    width: 30,
    height: 30,
  },
  {
    src: TailwindCSSLogo,
    alt: 'Tailwind CSS Logo',
    name: 'Tailwind CSS',
    width: 30,
    height: 30,
  },
  {
    src: PythonLogo,
    alt: 'Python Logo',
    name: 'Python',
    width: 30,
    height: 30,
  }, 
   {
    src: DartLogo,
    alt: 'Dart Logo',
    name: 'Dart',
    width: 30,
    height: 30,
  },
  {
    src: DockerLogo,
    alt: 'Docker Logo',
    name: 'Docker',
    width: 30,
    height: 30,
  },
  { 
    src: FigmaLogo,
     alt: 'Figma Logo', 
     name: 'Figma',
      width: 23,
       height: 23
       },
       {
        src: FirebaseLogo,
        alt: 'Firebase Logo',
        name: 'Firebase',
        width: 30,
        height: 30,
      },
      {
        src: FlutterLogo,
        alt: 'Flutter Logo',
        name: 'Flutter',
        width: 30,
        height: 30,
      },
      { 
        src: GitLogo,
         alt: 'Git Logo', 
         name: 'Git',
          width: 23,
           height: 23
           },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <div className="flex items-center gap-2">
        <div className="flex w-[60px] items-center justify-center">
          <Image
            src={src[0]}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(width) ? width[0] : width}
            height={Array.isArray(height) ? height[0] : height}
            className="scale-150 invert [&>path]:fill-white"
          />
        </div>
        <Image
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </div>
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <Image
          src={src}
          alt={alt as string}
          width={width as number}
          height={height as number}
        />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      )),
    ).flat()}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="lg:mt-22 relative z-40 mx-auto mb-[-75px] mt-[50px] flex flex-col gap-3 text-white lg:mb-0 lg:max-w-[1080px] lg:gap-6">
      <h2 className="mx-auto mb-3 w-full px-8 text-center text-sm lg:mb-0 lg:max-w-none lg:px-0 lg:text-xl">
        Leveraging state-of-the-art technologies
      </h2>

      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee-scroll whitespace-nowrap py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-6"
          style={{ animationDelay: '-20s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p className="mx-auto w-full max-w-[250px] text-center text-sm opacity-60 lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}
