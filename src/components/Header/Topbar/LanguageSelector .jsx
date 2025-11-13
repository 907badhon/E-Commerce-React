function LanguageSelector() {
  return (
    <select
      className=" rounded py-2 focus:outline-none bg-black text-center"
    >
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
      <option value="fr">Francas</option>
      <option value="es">Espanol</option>
    </select>
  );
}

export default LanguageSelector;
