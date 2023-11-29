interface HeadingProps {
    size: number;
    text: string;
    className?: string;
}

// Styled heading component
export default function Heading({ size, text, className }: HeadingProps) {
    const getSize = (size: number) => {
        switch (size) {
            case 1:
                return 'text-4xl';
            case 2:
                return 'text-3xl';
            case 3:
                return 'text-2xl';
            case 4:
                return 'text-xl';
            case 5:
                return 'text-lg';
            case 6:
                return 'text-base';
            default:
                return 'text-base';
        }
    }
    return <p className={getSize(size) + ' font-[inter] font-bold text-white ' + className}>{text}</p>

}