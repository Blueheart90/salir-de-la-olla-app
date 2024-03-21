type ButtonProps = {
  children: JSX.Element | string;
};
export default function Option({ children }: ButtonProps) {
  return (
    <button className='group relative  '>
      <span className='absolute inset-0 border-2 border-dashed border-black'></span>
      <div className='relative flex transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
        <div className='px-4 py-2  '>
          <h2 className='text-lg font-medium '>{children}</h2>
        </div>
      </div>
    </button>
  );
}
