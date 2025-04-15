import {
    Box,
    Button,
    Heading,
    Hide,
    HStack,
    Icon,
    Show,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';

import styles from './contentApril.module.css';

const RecipeList = (props) => {
    const { recipes = [] } = props;

    return (
        <SimpleGrid columns={[2, 2, 2, 3, 3, 4]} spacing={2}>
            {recipes.map((recipe) => (
                <Stack
                    key={recipe.title}
                    spacing={2}
                    border='1px solid rgba(0, 0, 0, 0.08);'
                    borderRadius='8px'
                    _hover={{
                        boxShadow:
                            '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                    }}
                >
                    <Box position='relative'>
                        <img src={recipe.image} alt={recipe.title} className={styles.imageNew} />
                        <Show below='991px'>
                            <Button
                                as='a'
                                bg='#d7ff94;'
                                borderRadius='4px'
                                p='2px 8px'
                                h='24px'
                                fontSize='14px'
                                fontWeight={400}
                                lineHeight='143%'
                                position='absolute'
                                top='8px'
                                left='8px'
                            >
                                <img src={recipe.btnIcon} alt={recipe.title} />
                                {recipe.goTo}
                            </Button>
                        </Show>
                    </Box>
                    <Stack p={['8px', '8px', '0 8px 8px', '20px 24px']}>
                        <Heading
                            fontWeight={500}
                            fontSize={['16px', '20px']}
                            lineHeight='140%'
                            textAlign='left'
                            noOfLines={1}
                        >
                            {recipe.title}
                        </Heading>
                        <Hide below='991px'>
                            <Text
                                noOfLines={3}
                                fontWeight={400}
                                fontSize='14px'
                                lineHeight='143%'
                                textAlign='left'
                            >
                                {recipe.body}
                            </Text>
                        </Hide>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Hide below='991px'>
                                <Box
                                    as='a'
                                    bg='#d7ff94;'
                                    borderRadius='4px'
                                    p='2px 8px'
                                    h='24px'
                                    fontWeight={400}
                                    display='flex'
                                    alignItems='center'
                                >
                                    <img src={recipe.btnIcon} alt={recipe.title} />
                                    {recipe.goTo}
                                </Box>
                            </Hide>
                            <HStack>
                                {recipe.count === 0 ? (
                                    ''
                                ) : (
                                    <Text
                                        color='#2db100;'
                                        lineHeight='133%;'
                                        fontSize='12px;'
                                        fontWeight={600}
                                        w='34px'
                                        h='24px'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Icon w='12px' h='12px' viewBox='0 0 12 12' mr={2}>
                                            <path
                                                d='M5.99985 3.3075C7.0401 2.23875 9.64035 4.11 5.99985 6.51525C2.35935 4.11 4.9596 2.2395 5.99985 3.309V3.3075Z'
                                                fill='black'
                                            />
                                            <path
                                                d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
                                                fill='black'
                                            />
                                        </Icon>
                                        {recipe.count}
                                    </Text>
                                )}
                                {recipe.likes === 0 ? (
                                    ''
                                ) : (
                                    <Text
                                        color='#2db100;'
                                        lineHeight='133%;'
                                        fontSize='12px;'
                                        fontWeight={600}
                                        w='34px'
                                        h='24px'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Icon w='12px' h='12px' viewBox='0 0 12 12' mr={2}>
                                            <path
                                                d='M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z'
                                                fill='black'
                                            />
                                            <path
                                                d='M8.48629 7.5105C8.55748 7.49374 8.63202 7.49816 8.70074 7.52322C8.76945 7.54829 8.82933 7.5929 8.87301 7.65157C8.91669 7.71023 8.94226 7.78039 8.94657 7.8534C8.95089 7.92642 8.93375 7.9991 8.89729 8.0625C8.60113 8.57576 8.175 9.00196 7.66178 9.2982C7.14856 9.59444 6.56636 9.75027 5.97379 9.75C5.38121 9.75027 4.79901 9.59444 4.28579 9.2982C3.77258 9.00196 3.34644 8.57576 3.05029 8.0625C3.01382 7.9991 2.99668 7.92642 3.001 7.8534C3.00531 7.78039 3.03088 7.71023 3.07456 7.65157C3.11824 7.5929 3.17812 7.54829 3.24684 7.52322C3.31555 7.49816 3.39009 7.49374 3.46129 7.5105H3.46504L3.47779 7.51425L3.52804 7.5255L3.71704 7.56675C3.87829 7.60125 4.10329 7.64775 4.35979 7.6935C4.87954 7.7865 5.50129 7.875 5.97379 7.875C6.44629 7.875 7.06879 7.7865 7.58779 7.6935C7.8662 7.64341 8.14351 7.58739 8.41954 7.5255L8.46979 7.51425L8.48254 7.51125L8.48629 7.50975V7.5105ZM3.56704 3.4245C4.13929 2.3565 6.58204 3.3345 4.28104 6C0.909036 4.803 2.51854 2.7765 3.56704 3.4245ZM8.43304 3.4245C9.48154 2.7765 11.091 4.803 7.71904 6C5.41879 3.3345 7.86154 2.3565 8.43304 3.4245Z'
                                                fill='black'
                                            />
                                        </Icon>
                                        {recipe.likes}
                                    </Text>
                                )}
                            </HStack>
                        </Box>
                    </Stack>
                </Stack>
            ))}
        </SimpleGrid>
    );
};
export { RecipeList };
