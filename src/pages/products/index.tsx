import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'

type ProductsProps = {
    products: any[];
};
const url = 'http://localhost:3001/products';

const fetcher = async (url: string) => await (await fetch(url)).json()

// client
const ProductPage = () => {
    const { data, error } = useSWR(url, fetcher, {revalidateOnMount: false, revalidateOnFocus: true})
    if (error) return <div>failed to load</div>
    if (!data) return <div className="text-red-500 text-center">Loading...</div>
    return (
        <div>
            {data.map((item:any) => (
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            ))}
        </div>
    );
};

export default ProductPage;
