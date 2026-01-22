
export const Input = ({ type, reference, placeholder }:
    { type: string, reference?: React.RefObject<HTMLInputElement | null>, placeholder: string }) => {

    return (
        <div>
            <input ref={reference} type={type} placeholder={placeholder}
                className="px-10 py-2 rounded border m-2  focus:outline-gray-800" />
        </div>
    )

}