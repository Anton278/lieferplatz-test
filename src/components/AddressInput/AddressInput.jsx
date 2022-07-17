import { StyledInput, StyledErrorP } from "../../App";
import { useEffect } from "react";
import { useDebounce } from "../../customHooks/useDebounce";

const AddressInput = ({ label, register, errors }) => {
    const debouncedSearchValue = useDebounce();

    // useEffect(() => {
    //     if (debouncedSearchValue) {
    //         setIsSearching(true);
    //         searchCharacters(debouncedSearchTerm).then((results) => {
    //             setIsSearching(false);
    //             setResults(results);
    //         });
    //     } else {
    //         setResults([]);
    //     }
    // }, [debouncedSearchTerm]);

    return (
        <>
            <StyledInput
                {...register(label, { required: true })}
                placeholder="Address"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default AddressInput;
