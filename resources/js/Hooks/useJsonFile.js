import { useEffect, useState } from "react";
import axios from "axios";

const useJsonFile = (repo, filePath) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJsonFile = async () => {
            try {
                const response = await axios.get(
                    `https://api.github.com/repos/${repo}/contents/${filePath}`,
                    {
                        headers: {
                            Accept: "application/vnd.github.v3+json",
                        },
                    }
                );

                // Decode the base64-encoded content
                const jsonData = JSON.parse(atob(response.data.content));
                setData(jsonData);
            } catch (err) {
                setError("Failed to fetch JSON file");
            } finally {
                setLoading(false);
            }
        };

        fetchJsonFile();
    }, [repo, filePath]);

    return { data, loading, error };
};

export default useJsonFile;
