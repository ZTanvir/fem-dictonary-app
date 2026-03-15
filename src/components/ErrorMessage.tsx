import EmojiImg from "../assets/images/emoji.png";

interface ErrorMessageProps {
  title: string;
  message: string;
}
export default function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <section className="flex flex-col items-center p-2">
      <img src={EmojiImg} alt="sad emoji" />
      <h3 className="text-light-black mt-6 text-lg font-bold">{title}</h3>
      <p className="text-solid-gray mt-2">{message}</p>
    </section>
  );
}
