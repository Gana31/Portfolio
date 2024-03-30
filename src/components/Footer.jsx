function Footer() {
  const fullYear = new Date();
  const year = fullYear.getFullYear();
  return (
    <div className="p-2 font-poppins text-base font-medium text-center bg-secondary text-dimWhite">
      © {year} | Code ❤️ by Ashwinee
    </div>
  );
}
export default Footer;
