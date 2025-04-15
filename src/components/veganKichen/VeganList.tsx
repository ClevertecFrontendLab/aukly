import {
    Box,
    Button,
    Heading,
    Hide,
    HStack,
    Icon,
    Image,
    Show,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';

import styles from './veganKichen.module.css';

const VeganList = (props) => {
    const { recipes = [] } = props;

    return (
        <SimpleGrid columns={[1, 1, 2, 1, 2, 2]} spacing={2}>
            {recipes.map((recipe) => (
                <HStack
                    key={recipe.title}
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                    pr={2}
                >
                    <HStack position='relative'>
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            className={styles.imageHot}
                            w={['158px', '158px', '158px', '158px', '346px', '346px']}
                            h={['128px', '128px', '128px', '244px', '244px', '244px']}
                        />
                        <Show below='991px'>
                            <Button
                                as='a'
                                bg='#ffffd3'
                                borderRadius='4px'
                                p='2px 8px'
                                h='24px'
                                fontSize='14px'
                                fontWeight={400}
                                position='absolute'
                                top='8px'
                                left='8px'
                            >
                                <img src={recipe.btnIcon} alt={recipe.title} />
                                {recipe.goTo}
                            </Button>
                        </Show>
                    </HStack>
                    <Stack
                        w={['170px', '170px', '182px', '170px', '534px', '322px']}
                        p={[2, 2, 2, 2, 2, 2]}
                    >
                        <HStack justifyContent='space-between'>
                            <Hide below='991px'>
                                <Box
                                    display='flex'
                                    justifyContent='space-between'
                                    alignItems='center'
                                >
                                    <Button
                                        as='a'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='143%'
                                        bg='#ffffd3'
                                        borderRadius='4px'
                                        p='2px 8px'
                                        h={['12px', '24px']}
                                    >
                                        <Image src={recipe.btnIcon} alt={recipe.title} />
                                        {recipe.goTo}
                                    </Button>
                                </Box>
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
                                            <Icon w='12px' h='12px' viewBox='0 0 12 12' mx={2}>
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
                            </Hide>
                        </HStack>
                        <Hide above='992px'>
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
                                        <Icon w='12px' h='12px' viewBox='0 0 12 12' mx={2}>
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
                        </Hide>
                        <Heading
                            fontWeight={500}
                            fontSize={['16px', '16px', '16px', '20px']}
                            lineHeight={['150%', '150%', '150%', '140%']}
                            textAlign='left'
                            noOfLines={2}
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
                        <HStack justifyContent='end' alignItems='center' mt={[4, 4, 0, 4]}>
                            <Button
                                bg='rgba(255, 255, 255, 0.06)'
                                border='1px solid rgba(0, 0, 0, 0.48)'
                                borderRadius='6px'
                                w={['24px', '24px', '24px', '122px', '122px', '122px']}
                                h={['24px', '24px', '24px', '32px', '32px', '32px']}
                                p={['0 6px', '0 6px', '0 6px', 2, 2, 2]}
                            >
                                <Icon
                                    w={6}
                                    h={6}
                                    viewBox='0 0 16 16'
                                    p={['0 6px', '0 6px', '0 6px', 2, 2, 2]}
                                >
                                    <path
                                        d='M7.9998 4.41001C9.3868 2.98501 12.8538 5.48001 7.9998 8.68701C3.1458 5.48001 6.6128 2.98601 7.9998 4.41201V4.41001Z'
                                        fill='black'
                                    />
                                    <path
                                        d='M2 2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V15.5C14 15.5904 13.9754 15.6792 13.9289 15.7568C13.8824 15.8343 13.8157 15.8979 13.736 15.9405C13.6563 15.9832 13.5664 16.0035 13.4761 15.9992C13.3858 15.9948 13.2983 15.9661 13.223 15.916L8 13.101L2.777 15.916C2.70171 15.9661 2.61423 15.9948 2.52389 15.9992C2.43355 16.0035 2.34373 15.9832 2.264 15.9405C2.18427 15.8979 2.1176 15.8343 2.07111 15.7568C2.02462 15.6792 2.00005 15.5904 2 15.5V2ZM4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14.566L7.723 12.084C7.80506 12.0294 7.90143 12.0003 8 12.0003C8.09857 12.0003 8.19494 12.0294 8.277 12.084L13 14.566V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H4Z'
                                        fill='black'
                                    />
                                </Icon>
                                <Hide below='991px'>Сохранить</Hide>
                            </Button>
                            <Button
                                bg='#000'
                                color='#fff'
                                w={['70px', '70px', '70px', '122px', '122px', '122px']}
                                h={['24px', '24px', '24px', '32px', '32px', '32px']}
                                fontWeight={600}
                                fontSize={['12px', '12px', '12px', '14px', '14px', '14px']}
                                lineHeight={['133%', '133%', '133%', '143%', '143%', '143%']}
                                borderRadius='6px'
                            >
                                Готовить
                            </Button>
                        </HStack>
                    </Stack>
                </HStack>
            ))}
        </SimpleGrid>
    );
};
export { VeganList };
