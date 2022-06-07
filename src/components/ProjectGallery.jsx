import ProjectTile from "./ProjectTile";
import projects from "../data/projects";

export default function ProjectGallery() {
  const projectTiles = projects.map(
    ({ title, codebase, description, url, image }) => {
      return(
      <ProjectTile
        title={title}
        codebase={codebase}
        description={description}
        url={url}
        image={image}
        
      />
      );
    }
  );
  return (
    <div className="grid grid-cols-1 object-cover gap-4">
      {projectTiles}
    </div>
  );
}
