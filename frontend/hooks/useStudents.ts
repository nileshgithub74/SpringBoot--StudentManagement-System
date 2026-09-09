"use client";

import {getStudents} from "@/services/studentService";
import type {Student} from "@/types/student";
import {getErrorMessage} from "@/utils/helpers";
import {useCallback, useEffect, useState} from "react";

export const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const refresh = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            setStudents(await getStudents());
        } catch (err) {
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        const timer = window.setTimeout(() => {
            void refresh();
        }, 0);
        return () => window.clearTimeout(timer);
    }, [refresh]);
    return { students, setStudents, loading, error, refresh };
};
