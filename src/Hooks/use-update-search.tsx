import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const useUpdateSearchParams = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const updateSearchParams = useCallback(
        (paramKey: string, paramValue: string | undefined) => {
            const params = new URLSearchParams(searchParams.toString());

            if (paramKey && paramValue) {
                params.set(paramKey, paramValue);
            } else if (paramKey) {
                params.delete(paramKey);
            }
            router.push(`?${params.toString()}`);
            router.refresh();
        },
        [searchParams, router]
    );

    return { updateSearchParams, searchParams };
};

export default useUpdateSearchParams;