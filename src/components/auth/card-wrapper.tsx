"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper: React.FC<CardWrapperProps> = ({
    children, headerLabel, backButtonLabel, backButtonHref, showSocial
}) => {
    return (
        <Card className="w-[400px] shadow-md">
            {children}
        </Card>
    )
}