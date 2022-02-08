import { FC } from "react";

import { Button, Box } from "@chakra-ui/react";

import { ArticleTitle } from "pages/about/common/title/Title";
import { configs } from "shared/content/Content";

export const Blog: FC = () => {
    return (
        <>
            <ArticleTitle title="Blog" />
            <br />
            {configs.about.blog.map((item) => (
                <Box py="2" key={item.id}>
                    <Button onClick={() => window.open(item.link, "_blank")} variant="link">
                        {item.title}
                    </Button>
                </Box>
            ))}
        </>
    );
};
