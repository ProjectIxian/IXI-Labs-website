"use client";

import React, {useEffect, useState} from 'react';
import Text from "@/components/Text/Text";
import {useTranslations} from "next-intl";

const Copyright = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const t = useTranslations('Footer');

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <Text type={'caption-01'}>
            {t('copyright', {
                year: year?.toString(),
            })}
        </Text>
    );
};

export default Copyright;
