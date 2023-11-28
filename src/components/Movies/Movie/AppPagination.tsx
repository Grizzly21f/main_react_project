import React from 'react';

import { Pagination, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";


const AppPagination = ({ total_pages }: { total_pages: number }) => {
    const [query, setQuery] = useSearchParams();

    const handlePagination = (event: React.ChangeEvent<unknown>, value: number)  => {
        setQuery(prev => {prev.set('page',`${value}`);return prev})

    };


    const page = query.get('page');
    const currentPage = page ? +page : 1;

    return (
        <div>
            <div >
                <Stack spacing={2}>
                    <Pagination
                        count={total_pages > 500 ? 500 : total_pages}
                        variant="outlined"
                        shape="rounded"
                        color={"standard"}
                        onChange={handlePagination}
                        page={currentPage}
                    />
                </Stack>
            </div>
        </div>
    );
};

export {
    AppPagination,
};
