import ProjectTile from "./ProjectTile";
import projects from "../data/projects";

export default function ProjectGallery() {
  const projectTiles = projects.map(
    ({ title, codebase, description, url, image }) => {
      image = image ? image : "https://live.staticflickr.com/65535/52155561630_a36bb8cae8_c.jpg"
      if (
        image ===
        "https://live.staticflickr.com/65535/52155561630_a36bb8cae8_c.jpg"
      ) {
        description = description + " - Photo by Huma Kabakci on Unsplash."
      };
      return(
      <ProjectTile
        title={title}
        codebase={codebase}
        description={description}
        url={url}
        image={image}
        key={url}
      />
      );
    }
  );
  return (
    <article className="grid grid-cols-1 object-cover" id="Projects">
      {projectTiles}
    </article>
  );
};