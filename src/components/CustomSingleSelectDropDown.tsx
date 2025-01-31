import { cn } from '@nextui-org/react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { ISelectDropdownOptions } from '../types/common.type';
import colors from '../theme/colors';

interface ICustomSingleSelectProps {
	value?: ISelectDropdownOptions | null;
	options: ISelectDropdownOptions[];
	onChange: (newValue: SingleValue<ISelectDropdownOptions>, actionMeta: ActionMeta<ISelectDropdownOptions>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	placeholder?: string;
	label?: string;
	labelColor?: string;
	height?: number;
	errorMessage?: string;
	isRequired?: boolean;
	isLoading?: boolean;
	isDisabled?: boolean;
	isClearable?: boolean;
	isSearchable?: boolean;
	isInvalid?: boolean;
	backgroundColor?: string;
	labelFontSize?: string;
	placeholderFontSize?: string;
}

const CustomSingleSelectDropdownV2 = (props: ICustomSingleSelectProps) => {
	const {
		value,
		options,
		onChange,
		onBlur,
		height = 40,
		label = 'Select',
		placeholder = 'Select...',
		errorMessage,
		isRequired = false,
		isDisabled = false,
		isLoading = false,
		isInvalid = false,
		isClearable = true,
		isSearchable = true,
		labelColor = colors.black,
		backgroundColor = colors.secondary,
		labelFontSize = 'sm',
		placeholderFontSize = '14px'
	} = props;

	return (
		<div className="">
			{label && (
				<label className={cn('block text-left mb-1  ', `text-${labelFontSize}`, `text-${labelColor}`)}>
					{label} {isRequired && <span className="text-danger">*</span>}
				</label>
			)}

			<Select
				isDisabled={isDisabled}
				isLoading={isLoading}
				isClearable={isClearable}
				isSearchable={isSearchable}
				placeholder={placeholder}
				value={value}
				options={options}
				isMulti={false}
				onBlur={onBlur}
				onChange={onChange}
				className="text-start cursor-pointer"
				styles={{
					control: provided => ({
						...provided,
						height: `${height}px`,
						borderRadius: '100px',
						cursor: 'pointer',
						backgroundColor: backgroundColor,
						paddingLeft: '10px'
					}),
					menuList: provided => ({ ...provided, cursor: 'pointer' }),
					menu: provided => ({
						...provided,
						backgroundColor: 'white',
						color: colors.black,
						cursor: 'pointer',
						zIndex: 99
					}),
					option: provided => ({
						...provided,
						textTransform: 'capitalize',
						cursor: 'pointer'
					}),
					placeholder: provided => ({
						...provided,
						fontSize: placeholderFontSize,
						color: colors.black
					}),
					indicatorSeparator: provided => ({ ...provided, display: 'none' })
				}}
			/>
			{isInvalid && errorMessage && <span className="text-warning font-semibold text-[12px]">{errorMessage}</span>}
		</div>
	);
};

export default CustomSingleSelectDropdownV2;
