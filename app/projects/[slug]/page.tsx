// Ensure these imports are correct
import { projectsData } from '@/components/Projects/Projects';
// import ProjectContent from '@/components/Projects/ProjectContent';
import { Footer } from '@/components/footer';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Project {
  slug: string;
  // Add other project properties here
}

// Generate static paths for all project slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project: Project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

// Fetch project data based on slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const project = projectsData.find((p: Project) => p.slug === slug);

  return {
    props: {
      project,
    },
  };
};

interface ProjectPageProps {
  project: Project | null;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const router = useRouter();

  // If the project is not found, show a "Project Not Found" message
  if (router.isFallback || !project) {
    return (
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto flex-1 px-6 py-24 sm:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-100">
              Project Not Found
            </h1>
            <p className="mt-4 text-gray-400">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Render the project content if found
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-1 px-6 py-24 sm:px-8">
        {/* <ProjectContent {...project} /> */}
      </div>
      <Footer />
    </main>
  );
};

export default ProjectPage;