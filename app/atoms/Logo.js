export default function Logo({ inview }) {
  return (
    <h1
      className={`${
        inview ? "text-gray-900" : "text-white"
      } font-mont font-bold`}
    >
      luca<span className="font-thin font-mont">sciortino</span>
    </h1>
  );
}
