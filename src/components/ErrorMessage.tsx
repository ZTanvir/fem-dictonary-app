import EmojiImg from "../assets/images/emoji.png";

interface ErrorMessageProps {
  title: string;
  message: string;
}
export default function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <section className="mt-10 flex flex-col items-center p-2 sm:mt-35">
      <img src={EmojiImg} alt="sad emoji" />
      <h3 className="text-light-black mt-6 text-center text-lg font-bold">
        {title}
      </h3>
      <p className="text-solid-gray mt-2 text-center">{message}</p>
    </section>
  );
}
