function Tag({ text, subText }) {
  return (
    <div
      className="flex
    justify-center items-center flex-col gap-y-4"
    >
      <div className="flex items-center justify-center rounded-full px-5 py-1 text-base font-sm font-poppins bg-dimGrey text-dimWhite tracking-wide">
        {text}
      </div>
      <p className="text-xl font-medium font-poppins text-dimWhite">
        {subText}
      </p>
    </div>
  );
}
export default Tag;
