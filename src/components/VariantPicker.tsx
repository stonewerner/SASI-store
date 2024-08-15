const VariantPicker = ({ variants, ...props }) => {
  console.log('Variants received by VariantPicker:', variants);
  if (variants.length === (0)) return null;


  if (variants.length === 1) {
    return (
      <select
        {...props}
        className="form-select appearance-none w-full relative mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-white border border-gray-300 focus:border-gray-500 shadow-sm text-gray-500 text-sm focus:outline-none focus:text-gray-900 rounded ring-0 focus:ring-0"
        disabled
      >
        <option>{variants[0].size}</option>
      </select>
    );
  }

  return (
    <select
      {...props}
      className="form-select appearance-none w-full relative mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-white border border-gray-300 focus:border-gray-500 shadow-sm text-gray-500 text-sm focus:outline-none focus:text-gray-900 rounded ring-0 focus:ring-0"
    >
      {variants.map(({ external_id, size }) => (
        <option key={external_id} value={external_id}>
          {size}
        </option>
      ))}
    </select>
  );
};

export default VariantPicker;
