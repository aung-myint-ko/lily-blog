import RichTextEditor from "@/components/forms/RichTextEditor";
import TitleField from "@/components/forms/TitleField";
import NewPostHeader from "@/components/navs-footers/NewPostHeader";

const CreatePost = () => {
  return (
    <section className="px-4 md:px-12 lg:px-16 2xl:mx-auto">
      <NewPostHeader />
      <TitleField />
      <RichTextEditor />
    </section>
  );
};

export default CreatePost;
