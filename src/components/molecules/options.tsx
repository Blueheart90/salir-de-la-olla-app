import Option from '@/components/atoms/option';
type Option = {
  id: string;
  text: string;
};

type OptionsProps = {
  options: Option[];
};
export default function Options({ options }: OptionsProps) {
  return (
    <div className=' grid grid-cols-2 gap-10'>
      {options.map((value, index) => (
        <Option
          key={index}
        >{`${value.id.toUpperCase()}. ${value.text}`}</Option>
      ))}
    </div>
  );
}
