function Button(props) {
  return (
    <button className="bg-white text-white-600 font-semibold px-8 py-3 rounded-lg border-2 border-orange-600">
  {props.label}
</button>
  );
}

export default Button;