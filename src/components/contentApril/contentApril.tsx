import { ArrowForwardIcon, EditIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Hide,
    HStack,
    Icon,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Show,
    Switch,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Button, Stack } from '@chakra-ui/react';

import iconFirst from '~/assets/icons/icons8-first.svg';
import iconRecipe from '~/assets/icons/icons8-recipe.svg';
import iconSalads from '~/assets/icons/icons8-salads.svg';
import user from '~/assets/user.svg';
import Menunos from '~/components/Menunos';

import styles from './contentApril.module.css';
import { CookingBlog } from './CookingBlog';
import { RecipeHot } from './RecipeHot';
import { RecipeList } from './RecipeList';

const recipesAll = [
    {
        id: 1,
        title: 'Солянка с грибами',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        goTo: 'Первые блюда',
        btnIcon: 'src/assets/image/icons8-castrulya-96.png',
        image: 'src/assets/image/solyanka.png',
        count: 1,
        likes: 0,
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        body: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        goTo: 'Веганские блюда',
        btnIcon: 'src/assets/image/icons8-lavrov-96.png',
        image: 'src/assets/image/kapust_kotlety.png',
        count: 2,
        likes: 1,
    },
    {
        id: 3,
        title: 'Оладьи на кефире Пышные',
        body: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        goTo: 'Десерты, выпечка',
        btnIcon: 'src/assets/image/icons8-bread-96.png',
        image: 'src/assets/image/oladi.png',
        count: 0,
        likes: 1,
    },
    {
        id: 4,
        title: 'Салат Здоровье',
        body: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        goTo: 'Салаты',
        btnIcon: 'src/assets/image/icons8-baklagan-96.png',
        image: 'src/assets/image/salat_health.png',
        count: 0,
        likes: 0,
    },
];
const recipesHot = [
    {
        id: 1,
        title: 'Кнели со спагетти',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        goTo: 'Вторые блюда',
        btnIcon: 'src/assets/image/icons8-castrulya-96.png',
        image: 'src/assets/image/kneli_with_spagetti.png',
        count: 85,
        likes: 152,
    },
    {
        id: 2,
        title: 'Пряная ветчина по итальянски',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        goTo: 'Вторые блюда',
        btnIcon: 'src/assets/image/icons8-lavrov.png',
        image: 'src/assets/image/vetchina_ialian.png',
        count: 159,
        likes: 256,
    },
    {
        id: 3,
        title: 'Лапша с курицей и шафраном',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        goTo: 'Вторые блюда',
        btnIcon: 'src/assets/image/icons8-bread-96.png',
        image: 'src/assets/image/rolton_chiken_hafran.png',
        count: 248,
        likes: 342,
    },
    {
        id: 4,
        title: 'Том-ям с капустой кимчи',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        goTo: 'Национальные',
        btnIcon: 'src/assets/image/icons8-baklagan-96.png',
        image: 'src/assets/image/tom_ym_kimchi.png',
        count: 124,
        likes: 324,
    },
];
const blogAll = [
    {
        id: 1,
        title: 'Елена Высоцкая',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        social: '@elenapovar',
        image: 'src/assets/image/Helena Vysotskaya.svg',
    },
    {
        id: 2,
        title: 'Alex Cook',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        social: '@funtasticooking',
        image: 'src/assets/image/Alex Cook.svg',
    },
    {
        id: 3,
        title: 'Екатерина Константинопольская',
        body: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        social: '@bake_and_pie',
        image: 'src/assets/image/Kate Konstantinopolskaya.svg',
    },
];
function contentApril() {
    return (
        <>
            <Grid
                gridTemplateColumns={['1fr', '1fr', '1fr', '256px 1fr 280px']}
                h='calc(100vh - 110px)'
                position='relative'
            >
                <Menunos />
                <GridItem px='3' bg='white' textAlign='center'>
                    <Box>
                        <Box>
                            <Heading
                                as='h1'
                                fontFamily='var(--font-family)'
                                fontSize={['24px', '24px', '24px', '48px']}
                                my={['12px', '16px']}
                                lineHeight={['133%', '133%', '133%', '100%']}
                            >
                                Приятного аппетита!
                            </Heading>
                        </Box>
                        <HStack justifyContent='center'>
                            <Button
                                className={styles.btnSort}
                                bg='transparent;'
                                w={['32px', '32px', '32px', '48px']}
                                h={['32px', '32px', '32px', '48px']}
                                p={0}
                            >
                                <Icon viewBox='0 0 14 14'>
                                    <path
                                        d='M5.75 9.1875C5.75 9.07147 5.79609 8.96019 5.87814 8.87814C5.96019 8.79609 6.07147 8.75 6.1875 8.75H8.8125C8.92853 8.75 9.03981 8.79609 9.12186 8.87814C9.20391 8.96019 9.25 9.07147 9.25 9.1875C9.25 9.30353 9.20391 9.41481 9.12186 9.49686C9.03981 9.57891 8.92853 9.625 8.8125 9.625H6.1875C6.07147 9.625 5.96019 9.57891 5.87814 9.49686C5.79609 9.41481 5.75 9.30353 5.75 9.1875ZM4 6.5625C4 6.44647 4.04609 6.33519 4.12814 6.25314C4.21019 6.17109 4.32147 6.125 4.4375 6.125H10.5625C10.6785 6.125 10.7898 6.17109 10.8719 6.25314C10.9539 6.33519 11 6.44647 11 6.5625C11 6.67853 10.9539 6.78981 10.8719 6.87186C10.7898 6.95391 10.6785 7 10.5625 7H4.4375C4.32147 7 4.21019 6.95391 4.12814 6.87186C4.04609 6.78981 4 6.67853 4 6.5625ZM2.25 3.9375C2.25 3.82147 2.29609 3.71019 2.37814 3.62814C2.46019 3.54609 2.57147 3.5 2.6875 3.5H12.3125C12.4285 3.5 12.5398 3.54609 12.6219 3.62814C12.7039 3.71019 12.75 3.82147 12.75 3.9375C12.75 4.05353 12.7039 4.16481 12.6219 4.24686C12.5398 4.32891 12.4285 4.375 12.3125 4.375H2.6875C2.57147 4.375 2.46019 4.32891 2.37814 4.24686C2.29609 4.16481 2.25 4.05353 2.25 3.9375Z'
                                        fill='black'
                                    />
                                </Icon>
                            </Button>

                            <InputGroup maxW={458} px={2}>
                                <Input
                                    placeholder='Название или ингредиент...'
                                    h={['32px', '32px', '32px', '48px', '48px']}
                                    color='#134b00;'
                                    _placeholder={{ color: 'inherit' }}
                                />
                                <InputRightElement top='-4px' h='48px' w='48px'>
                                    <Icon as={SearchIcon} />
                                </InputRightElement>
                            </InputGroup>
                        </HStack>
                        {/*  */}
                        <Hide below='md'>
                            <Stack justifyContent='center' direction='row' mt={2}>
                                <FormControl display='flex' alignItems='center' maxW={268}>
                                    <FormLabel htmlFor='allergen' mb='0'>
                                        Исключить мои аллергены
                                    </FormLabel>
                                    <Switch id='allergen' />
                                </FormControl>
                                <Select placeholder='Выберите из списка...' maxW={234}>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Hide>
                    </Box>
                    {/* -------------------------------------Новые рецепты------------------------------------------ */}
                    <Stack>
                        <Box mt={8} textAlign='left'>
                            <Heading
                                fontFamily='var(--font-family)'
                                fontSize={['24px', '24px', '24px', '36px', '36px', '48px']}
                                lineHeight={['133%', '133%', '133%', '111%', '111%', '100%']}
                                fontWeight={500}
                                mb={[2, 2, 2, 2, 2, 8]}
                            >
                                Новые рецепты
                            </Heading>
                        </Box>
                        <RecipeList recipes={recipesAll} />
                    </Stack>
                    {/* -----------------------------------------Самое сочное-------------------------------------- */}
                    <Stack>
                        <Box
                            mt={8}
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Heading
                                fontFamily='var(--font-family)'
                                fontSize={['24px', '24px', '24px', '36px', '36px', '48px']}
                                lineHeight={['133%', '133%', '133%', '111%', '111%', '100%']}
                                fontWeight={500}
                            >
                                Самое сочное
                            </Heading>
                            <Button
                                data-test-id='juiciest-link'
                                as='a'
                                href='/hot'
                                fontFamily='var(--font-family)'
                                bg='#b1ff2e'
                                fontSize='18px'
                                lineHeight='156%'
                                fontWeight={600}
                                color='#000'
                                p='0 24px'
                                w={['167px', '167px', '167px', '167px', '197px', '197px']}
                                h={['40px', '40px', '40px', '48px', '48px', '48px']}
                            >
                                Вся подборка
                                <ArrowForwardIcon ml='10px' />
                            </Button>
                        </Box>
                        <RecipeHot recipes={recipesHot} />
                        <Box>
                            <Button
                                className={styles.btnMobile}
                                data-test-id='juiciest-link-mobile'
                                as='a'
                                href='/hot'
                                fontFamily='var(--font-family)'
                                bg='#b1ff2e'
                                fontSize={['16px', '18px']}
                                lineHeight={['150%', '156%']}
                                fontWeight={600}
                                color='#000'
                                p={['0 16px', '0 24px']}
                                w='167px'
                                h='40px'
                            >
                                Вся подборка
                                <ArrowForwardIcon ml='10px' />
                            </Button>
                        </Box>
                    </Stack>
                    {/* ------------------------------------------------Кулинарные блоги--------------------------------- */}
                    <Stack mt={8} p={4} bg='#c4ff61' borderRadius={16}>
                        <Box
                            mb={[0, 0, 0, 2, 2, 6]}
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Heading
                                fontFamily='var(--font-family)'
                                fontSize={['24px', '24px', '24px', '36px', '36px', '48px']}
                                lineHeight={['133%', '133%', '133%', '111%', '111%', '100%']}
                                fontWeight={500}
                                mb={[2, 2, 2, 2, 2, 8]}
                            >
                                Кулинарные блоги
                            </Heading>
                            <Hide below='991px'>
                                <Button
                                    fontFamily='var(--font-family)'
                                    bg='transparent'
                                    fontSize='18px'
                                    lineHeight='156%'
                                    fontWeight={600}
                                >
                                    Все авторы
                                    <ArrowForwardIcon ml='10px' />
                                </Button>
                            </Hide>
                        </Box>
                        <CookingBlog blogs={blogAll} />
                        <Show below='991px'>
                            <Box>
                                <Button
                                    fontFamily='var(--font-family)'
                                    bg='transparent'
                                    fontSize={['16px', '18px']}
                                    lineHeight={['150%', '156%']}
                                    fontWeight={600}
                                >
                                    Все авторы
                                    <ArrowForwardIcon ml='10px' />
                                </Button>
                            </Box>
                        </Show>
                    </Stack>

                    <Divider mt='32px' />
                    {/* -------------------------------------------Веганская кухня ----------------------------------- */}
                    <Grid gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr']} mt={8}>
                        <GridItem>
                            <Stack textAlign='left' flexDirection={['column', 'row', 'row']}>
                                <Heading
                                    fontFamily='var(--font-family)'
                                    fontSize={['24px', '24px', '48px', '48px', '48px', '48px']}
                                    lineHeight={['133%', '133%', '100%', '100%', '100%', '100%']}
                                    w={['340px', '340px', '282px', '650px']}
                                    fontWeight={500}
                                    mb={[2, 2, 2, 2, 8, 8]}
                                >
                                    Веганская кухня
                                </Heading>
                                {/* <Show below='1440px'> */}
                                <Text
                                    fontFamily='var(--font-family)'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    fontWeight={500}
                                    color='rgba(0, 0, 0, 0.48)'
                                    textAlign='left'
                                    mb={2}
                                    w={['340px', '340px', '460px', '740px', '582px']}
                                >
                                    Интересны не только убеждённым вегетарианцам, но и тем, кто
                                    хочет попробовать вегетарианскую диету и готовить вкусные
                                    вегетарианские блюда.
                                </Text>
                                {/* </Show> */}
                            </Stack>
                            <Stack flexDirection={['column', 'row']} mb={2}>
                                <Stack
                                    p='12px'
                                    border='1px solid rgba(0, 0, 0, 0.08)'
                                    borderRadius='8px'
                                    w={['340px', 'null', '222px', '282px', '322px', '322px']}
                                    _hover={{
                                        boxShadow:
                                            '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                    }}
                                >
                                    <Heading
                                        fontFamily='var(--font-family)'
                                        fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}
                                        fontWeight={500}
                                        lineHeight={[
                                            '150%',
                                            '150%',
                                            '150%',
                                            '140%',
                                            '140%',
                                            '140%',
                                        ]}
                                        textAlign='left'
                                        noOfLines={1}
                                    >
                                        Картошка, тушенная с болгарским перцем и фасолью в томатном
                                        соусе
                                    </Heading>
                                    <Text
                                        fontFamily='var(--font-family)'
                                        noOfLines={3}
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='143%'
                                        textAlign='left'
                                        mb={4}
                                    >
                                        Картошка, тушенная с болгарским перцем, фасолью, морковью и
                                        луком, - вариант сытного блюда на каждый день. Фасоль в
                                        данном случае заменяет мясо, делая рагу сытным и
                                        питательным. Чтобы сократить время приготовления, возьмём
                                        консервированную фасоль. Блюдо хоть и простое, но в полной
                                        мере наполнено ароматами и имеет выразительный вкус за счёт
                                        добавления томатной пасты.
                                    </Text>
                                    <Box
                                        display='flex'
                                        justifyContent='space-between'
                                        alignItems='center'
                                    >
                                        <Button
                                            as='a'
                                            bg='#ffffd3'
                                            borderRadius='4px'
                                            p='2px 8px'
                                            h='24px'
                                            fontWeight={400}
                                        >
                                            <Image src={iconFirst} /> Вторые блюда
                                        </Button>
                                        <HStack>
                                            <Text
                                                color='#2db100;'
                                                lineHeight='133%;'
                                                fontSize='12px;'
                                                fontWeight={600}
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
                                                1
                                            </Text>
                                            <Text
                                                color='#2db100;'
                                                lineHeight='133%;'
                                                fontSize='12px;'
                                                fontWeight={600}
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
                                                1
                                            </Text>
                                        </HStack>
                                    </Box>
                                </Stack>
                                <Stack
                                    p='12px'
                                    border='1px solid rgba(0, 0, 0, 0.08)'
                                    borderRadius='8px'
                                    w={['340px', 'null', '222px', '282px', '322px', '322px']}
                                    _hover={{
                                        boxShadow:
                                            '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                    }}
                                >
                                    <Heading
                                        fontFamily='var(--font-family)'
                                        fontSize={['16px', '16px', '16px', '18px', '18px', '20px']}
                                        fontWeight={500}
                                        lineHeight={[
                                            '150%',
                                            '150%',
                                            '150%',
                                            '156%',
                                            '156%',
                                            '156%',
                                        ]}
                                        textAlign='left'
                                        noOfLines={1}
                                    >
                                        Капустные котлеты
                                    </Heading>
                                    <Text
                                        fontFamily='var(--font-family)'
                                        noOfLines={3}
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='143%'
                                        textAlign='left'
                                        mb={4}
                                    >
                                        Капустные котлеты по этому рецепту получаются необычайно
                                        пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная
                                        нотка наверняка помогут сделать эти чудесные котлеты из
                                        капусты одним из ваших любимых овощных блюд.
                                    </Text>
                                    <Box
                                        display='flex'
                                        justifyContent='space-between'
                                        alignItems='center'
                                    >
                                        <Button
                                            as='a'
                                            bg='#ffffd3'
                                            borderRadius='4px'
                                            p='2px 8px'
                                            h='24px'
                                            fontWeight={400}
                                        >
                                            <Image src={iconFirst} /> Вторые блюда
                                        </Button>
                                        <HStack>
                                            <Text
                                                color='#2db100;'
                                                lineHeight='133%;'
                                                fontSize='12px;'
                                                fontWeight={600}
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
                                                2
                                            </Text>
                                            <Text
                                                color='#2db100;'
                                                lineHeight='133%;'
                                                fontSize='12px;'
                                                fontWeight={600}
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
                                                1
                                            </Text>
                                        </HStack>
                                    </Box>
                                </Stack>
                                <Show above='768px'>
                                    <VStack>
                                        <HStack
                                            h={['52px', '56px']}
                                            border='1px solid rgba(0, 0, 0, 0.08);'
                                            borderRadius='8px'
                                            w={['340px', 'null', '275px', '100%', '668px']}
                                            px={3}
                                            m='0 auto 0 0'
                                            _hover={{
                                                boxShadow:
                                                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                            }}
                                        >
                                            <Box
                                                as='span'
                                                flex='1'
                                                display='flex'
                                                alignItems='center'
                                                textAlign='left'
                                            >
                                                <img src={iconSalads} alt='Салаты' />
                                                <Text
                                                    fontFamily='var(--font-family)'
                                                    fontSize='16px'
                                                    fontWeight='500'
                                                    lineHeight='150%'
                                                    noOfLines={1}
                                                >
                                                    Стейк для вегетарианцев
                                                </Text>
                                            </Box>
                                            <Button
                                                fontFamily='var(--font-family)'
                                                bg='transparent'
                                                border='1px solid #2db100;'
                                                borderRadius='6px'
                                                p={['0 8px', '8px 12px']}
                                                w={['70px', '87px']}
                                                h='32px'
                                                color='#2db100;'
                                                fontSize='12px'
                                                fontWeight='600'
                                                lineHeight='133%'
                                            >
                                                Готовить
                                            </Button>
                                        </HStack>
                                        <HStack
                                            h={['52px', '56px']}
                                            border='1px solid rgba(0, 0, 0, 0.08);'
                                            borderRadius='8px'
                                            w={['340px', 'null', '275px', '100%', '668px']}
                                            px={3}
                                            m='0 auto 0 0'
                                            _hover={{
                                                boxShadow:
                                                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                            }}
                                        >
                                            <Box
                                                as='span'
                                                flex='1'
                                                display='flex'
                                                alignItems='center'
                                                textAlign='left'
                                            >
                                                <img src={iconSalads} alt='Салаты' />
                                                <Text
                                                    fontFamily='var(--font-family)'
                                                    fontSize='16px'
                                                    fontWeight='500'
                                                    lineHeight='150%'
                                                    noOfLines={1}
                                                >
                                                    Котлеты из гречки и фасоли{' '}
                                                </Text>
                                            </Box>
                                            <Button
                                                bg='transparent'
                                                border='1px solid #2db100;'
                                                borderRadius='6px'
                                                p={['0 8px', '8px 12px']}
                                                w={['70px', '87px']}
                                                h='32px'
                                                color='#2db100;'
                                                fontSize='12px'
                                                fontWeight='600'
                                                lineHeight='133%'
                                            >
                                                Готовить
                                            </Button>
                                        </HStack>
                                        <HStack
                                            h={['52px', '56px']}
                                            border='1px solid rgba(0, 0, 0, 0.08);'
                                            borderRadius='8px'
                                            w={['340px', 'null', '275px', '100%', '668px']}
                                            px={3}
                                            m='0 auto 0 0'
                                            _hover={{
                                                boxShadow:
                                                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                            }}
                                        >
                                            <Box
                                                as='span'
                                                flex='1'
                                                display='flex'
                                                alignItems='center'
                                                textAlign='left'
                                            >
                                                <img src={iconSalads} alt='Салаты' />
                                                <Text
                                                    fontFamily='var(--font-family)'
                                                    fontSize='16px'
                                                    fontWeight='500'
                                                    lineHeight='150%'
                                                    noOfLines={1}
                                                >
                                                    Сырный суп с лапшой и брокколи
                                                </Text>
                                            </Box>
                                            <Button
                                                bg='transparent'
                                                border='1px solid #2db100;'
                                                borderRadius='6px'
                                                p={['0 8px', '8px 12px']}
                                                w={['70px', '87px']}
                                                h='32px'
                                                color='#2db100;'
                                                fontSize='12px'
                                                fontWeight='600'
                                                lineHeight='133%'
                                            >
                                                Готовить
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </Show>
                            </Stack>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Hide above='768px'>
                                <VStack>
                                    <HStack
                                        h={['52px', 'null', '56px', 'null', '52px']}
                                        border='1px solid rgba(0, 0, 0, 0.08);'
                                        borderRadius='8px'
                                        w={['340px', 'null', '100%', 'null', '282px']}
                                        px={3}
                                        m='0 auto 0 0'
                                        _hover={{
                                            boxShadow:
                                                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                        }}
                                    >
                                        <Box
                                            as='span'
                                            flex='1'
                                            display='flex'
                                            alignItems='center'
                                            textAlign='left'
                                        >
                                            <img src={iconSalads} alt='Салаты' />
                                            <Text
                                                fontFamily='var(--font-family)'
                                                fontSize='16px'
                                                fontWeight='500'
                                                lineHeight='150%'
                                                noOfLines={1}
                                            >
                                                Домашние сырные палочки
                                            </Text>
                                        </Box>
                                        <Button
                                            bg='transparent'
                                            border='1px solid #2db100;'
                                            borderRadius='6px'
                                            p={['0 8px', '8px 12px']}
                                            w={['70px', '87px']}
                                            h='32px'
                                            color='#2db100;'
                                            fontSize='12px'
                                            fontWeight='600'
                                            lineHeight='133%'
                                        >
                                            Готовить
                                        </Button>
                                    </HStack>
                                    <HStack
                                        h={['52px', 'null', '56px', 'null', '52px']}
                                        border='1px solid rgba(0, 0, 0, 0.08);'
                                        borderRadius='8px'
                                        w={['340px', '100%']}
                                        px={3}
                                        m='0 auto 0 0'
                                        _hover={{
                                            boxShadow:
                                                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                        }}
                                    >
                                        <Box
                                            as='span'
                                            flex='1'
                                            display='flex'
                                            alignItems='center'
                                            textAlign='left'
                                        >
                                            <img src={iconSalads} alt='Салаты' />
                                            <Text
                                                fontFamily='var(--font-family)'
                                                fontSize='16px'
                                                fontWeight='500'
                                                lineHeight='150%'
                                                noOfLines={1}
                                            >
                                                Панкейки
                                            </Text>
                                        </Box>
                                        <Button
                                            bg='transparent'
                                            border='1px solid #2db100;'
                                            borderRadius='6px'
                                            p={['0 8px', '8px 12px']}
                                            w={['70px', '87px']}
                                            h='32px'
                                            color='#2db100;'
                                            fontSize='12px'
                                            fontWeight='600'
                                            lineHeight='133%'
                                        >
                                            Готовить
                                        </Button>
                                    </HStack>
                                    <HStack
                                        h={['52px', 'null', '56px', 'null', '52px']}
                                        border='1px solid rgba(0, 0, 0, 0.08);'
                                        borderRadius='8px'
                                        w={['340px', '100%']}
                                        px={3}
                                        m='0 auto 0 0'
                                        _hover={{
                                            boxShadow:
                                                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                                        }}
                                    >
                                        <Box
                                            as='span'
                                            flex='1'
                                            display='flex'
                                            alignItems='center'
                                            textAlign='left'
                                        >
                                            <img src={iconSalads} alt='Салаты' />
                                            <Text
                                                fontFamily='var(--font-family)'
                                                fontSize='16px'
                                                fontWeight='500'
                                                lineHeight='150%'
                                                noOfLines={1}
                                            >
                                                Воздушное банановое печенье на сковороде
                                            </Text>
                                        </Box>
                                        <Button
                                            bg='transparent'
                                            border='1px solid #2db100;'
                                            borderRadius='6px'
                                            p={['0 8px', '8px 12px']}
                                            w={['70px', '87px']}
                                            h='32px'
                                            color='#2db100;'
                                            fontSize='12px'
                                            fontWeight='600'
                                            lineHeight='133%'
                                        >
                                            Готовить
                                        </Button>
                                    </HStack>
                                </VStack>
                            </Hide>
                        </GridItem>
                    </Grid>
                </GridItem>

                {/* ---------------------------Footer----------------------------- */}
                <Hide above='lg'>
                    <Grid
                        data-test-id='footer'
                        gridTemplateColumns='repeat(4, 1fr)'
                        mt={4}
                        h='84px'
                        boxShadow='0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                        bg='#ffffd3'
                        position='sticky'
                        bottom='0'
                    >
                        <GridItem
                            w='100%'
                            h='100%'
                            mt='14px'
                            display='flex'
                            alignItems='center'
                            flexDirection='column'
                            boxShadow='#ffffd3, radial-gradient(62.52% 62.51% at 48.89% 37.5%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%);'
                        >
                            <Button w='40px' h='40px' borderRadius='50px' p='0 12px' bg='#000'>
                                <Icon boxSize={4} viewBox='0 0 16 16'>
                                    <path
                                        d='M2 13.5V7H3V13.5C3 13.6326 3.05268 13.7598 3.14645 13.8536C3.24021 13.9473 3.36739 14 3.5 14H12.5C12.6326 14 12.7598 13.9473 12.8536 13.8536C12.9473 13.7598 13 13.6326 13 13.5V7H14V13.5C14 13.8978 13.842 14.2794 13.5607 14.5607C13.2794 14.842 12.8978 15 12.5 15H3.5C3.10218 15 2.72064 14.842 2.43934 14.5607C2.15804 14.2794 2 13.8978 2 13.5ZM13 2.5V6L11 4V2.5C11 2.36739 11.0527 2.24021 11.1464 2.14645C11.2402 2.05268 11.3674 2 11.5 2H12.5C12.6326 2 12.7598 2.05268 12.8536 2.14645C12.9473 2.24021 13 2.36739 13 2.5Z'
                                        fill='#FFFFD3'
                                    />
                                    <path
                                        d='M7.29266 1.49994C7.48018 1.31247 7.73449 1.20715 7.99966 1.20715C8.26482 1.20715 8.51913 1.31247 8.70665 1.49994L15.3537 8.14594C15.4475 8.23983 15.5003 8.36716 15.5003 8.49994C15.5003 8.63272 15.4475 8.76005 15.3537 8.85394C15.2598 8.94783 15.1324 9.00057 14.9997 9.00057C14.8669 9.00057 14.7395 8.94783 14.6457 8.85394L7.99966 2.20694L1.35365 8.85394C1.25977 8.94783 1.13243 9.00057 0.999655 9.00057C0.866879 9.00057 0.739542 8.94783 0.645655 8.85394C0.551768 8.76005 0.499023 8.63272 0.499023 8.49994C0.499023 8.36716 0.551768 8.23983 0.645655 8.14594L7.29266 1.49994Z'
                                        fill='#FFFFD3'
                                    />
                                </Icon>
                            </Button>
                            <Text
                                fontFamily='var(--font-family)'
                                fontSize='12px'
                                fontWeight={500}
                                lineHeight='133%'
                                color='#000'
                                mt='4px'
                            >
                                Главная
                            </Text>
                        </GridItem>
                        <GridItem
                            w='100%'
                            h='100%'
                            mt='14px'
                            display='flex'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Icon as={SearchIcon} w='40px' h='40px' />
                            <Text
                                fontFamily='var(--font-family)'
                                fontSize='12px'
                                fontWeight={400}
                                lineHeight='133%'
                                color='rgba(0, 0, 0, 0.64)'
                                mt='4px'
                            >
                                Поиск
                            </Text>
                        </GridItem>
                        <GridItem
                            w='100%'
                            h='100%'
                            mt='14px'
                            display='flex'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Icon as={EditIcon} w='40px' h='40px' />
                            <Text
                                fontFamily='var(--font-family)'
                                fontSize='12px'
                                fontWeight={400}
                                lineHeight='133%'
                                color='rgba(0, 0, 0, 0.64)'
                                mt='4px'
                            >
                                Записать
                            </Text>
                        </GridItem>
                        <GridItem
                            w='100%'
                            h='100%'
                            mt='14px'
                            display='flex'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Image src={user} alt='User logo' w='40px' h='40px' />
                            <Text
                                fontFamily='var(--font-family)'
                                fontSize='12px'
                                fontWeight={400}
                                lineHeight='133%'
                                color='rgba(0, 0, 0, 0.64)'
                                mt='4px'
                            >
                                Мой профиль
                            </Text>
                        </GridItem>
                    </Grid>
                </Hide>

                {/* -------------------------------Blog-------------------------------- */}
                <Hide below='md'>
                    <GridItem pl='2' bg='white'>
                        <Flex flexDirection='column' justifyContent='space-between'>
                            <VStack>
                                <Button
                                    bg='transparent'
                                    color='#2db100;'
                                    lineHeight='150%;'
                                    fontSize='16px;'
                                >
                                    <Icon w={6} h={6} viewBox='0 0 16 16' pr={2}>
                                        <path
                                            d='M7.9998 4.41001C9.3868 2.98501 12.8538 5.48001 7.9998 8.68701C3.1458 5.48001 6.6128 2.98601 7.9998 4.41201V4.41001Z'
                                            fill='black'
                                        />
                                        <path
                                            d='M2 2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V15.5C14 15.5904 13.9754 15.6792 13.9289 15.7568C13.8824 15.8343 13.8157 15.8979 13.736 15.9405C13.6563 15.9832 13.5664 16.0035 13.4761 15.9992C13.3858 15.9948 13.2983 15.9661 13.223 15.916L8 13.101L2.777 15.916C2.70171 15.9661 2.61423 15.9948 2.52389 15.9992C2.43355 16.0035 2.34373 15.9832 2.264 15.9405C2.18427 15.8979 2.1176 15.8343 2.07111 15.7568C2.02462 15.6792 2.00005 15.5904 2 15.5V2ZM4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14.566L7.723 12.084C7.80506 12.0294 7.90143 12.0003 8 12.0003C8.09857 12.0003 8.19494 12.0294 8.277 12.084L13 14.566V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H4Z'
                                            fill='black'
                                        />
                                    </Icon>{' '}
                                    185
                                </Button>
                                <Button
                                    bg='transparent'
                                    color='#2db100;'
                                    lineHeight='150%;'
                                    fontSize='16px;'
                                >
                                    <Icon w={6} h={6} viewBox='0 0 16 16' pr={2}>
                                        <path
                                            d='M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7ZM11 8C11.7956 8 12.5587 7.68393 13.1213 7.12132C13.6839 6.55871 14 5.79565 14 5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5C8 5.79565 8.31607 6.55871 8.87868 7.12132C9.44129 7.68393 10.2044 8 11 8V8Z'
                                            fill='black'
                                        />
                                        <path
                                            d='M5.216 14C5.06775 13.6878 4.99382 13.3455 5 13C5 11.645 5.68 10.25 6.936 9.28C6.30909 9.08684 5.65595 8.99237 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.216Z'
                                            fill='black'
                                        />
                                        <path
                                            d='M4.5 8C5.16304 8 5.79893 7.73661 6.26777 7.26777C6.73661 6.79893 7 6.16304 7 5.5C7 4.83696 6.73661 4.20107 6.26777 3.73223C5.79893 3.26339 5.16304 3 4.5 3C3.83696 3 3.20107 3.26339 2.73223 3.73223C2.26339 4.20107 2 4.83696 2 5.5C2 6.16304 2.26339 6.79893 2.73223 7.26777C3.20107 7.73661 3.83696 8 4.5 8V8Z'
                                            fill='black'
                                        />
                                    </Icon>{' '}
                                    589
                                </Button>
                                <Button
                                    bg='transparent'
                                    color='#2db100;'
                                    lineHeight='150%;'
                                    fontSize='16px;'
                                >
                                    <Icon w={6} h={6} viewBox='0 0 16 16' pr={2}>
                                        <path
                                            d='M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16Z'
                                            fill='black'
                                        />
                                        <path
                                            d='M11.315 10.014C11.41 9.99164 11.5094 9.99754 11.601 10.031C11.6926 10.0644 11.7724 10.1239 11.8307 10.2021C11.8889 10.2803 11.923 10.3738 11.9288 10.4712C11.9345 10.5685 11.9117 10.6655 11.863 10.75C11.4682 11.4343 10.9 12.0026 10.2157 12.3976C9.53141 12.7926 8.75515 13.0003 7.96505 13C7.17494 13.0003 6.39868 12.7926 5.71439 12.3976C5.0301 12.0026 4.46192 11.4343 4.06705 10.75C4.01842 10.6655 3.99558 10.5685 4.00133 10.4712C4.00708 10.3738 4.04118 10.2803 4.09942 10.2021C4.15766 10.1239 4.2375 10.0644 4.32912 10.031C4.42073 9.99754 4.52012 9.99164 4.61505 10.014H4.62005L4.63705 10.019L4.70405 10.034L4.95605 10.089C5.17105 10.135 5.47105 10.197 5.81305 10.258C6.50605 10.382 7.33505 10.5 7.96505 10.5C8.59505 10.5 9.42505 10.382 10.117 10.258C10.4883 10.1912 10.858 10.1165 11.226 10.034L11.293 10.019L11.31 10.015L11.315 10.013V10.014ZM4.75605 4.56599C5.51905 3.14199 8.77605 4.44599 5.70805 7.99999C1.21205 6.40399 3.35805 3.70199 4.75605 4.56599ZM11.244 4.56599C12.642 3.70199 14.788 6.40399 10.292 7.99999C7.22505 4.44599 10.482 3.14199 11.244 4.56599Z'
                                            fill='black'
                                        />
                                    </Icon>{' '}
                                    587
                                </Button>
                            </VStack>

                            <VStack position='fixed' bottom='52px' right='52px'>
                                <Button
                                    h='150px'
                                    w='150px'
                                    display='flex'
                                    flexDirection='column'
                                    bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%);'
                                    _hover={{ outline: 'none;' }}
                                >
                                    <img src={iconRecipe} alt='Рецепты' />

                                    <Box
                                        fontFamily='var(--font-family)'
                                        as='span'
                                        fontSize='12px'
                                        color='rgba(0, 0, 0, 0.64);'
                                        fontWeight='400'
                                        lineHeight='133%'
                                    >
                                        Записать рецепт
                                    </Box>
                                </Button>
                            </VStack>
                        </Flex>
                    </GridItem>
                </Hide>
            </Grid>
        </>
    );
}

export default contentApril;
