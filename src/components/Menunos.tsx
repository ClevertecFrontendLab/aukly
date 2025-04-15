import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    GridItem,
    Hide,
    Icon,
    Text,
} from '@chakra-ui/react';

import iconChild from '~/assets/icons/icons8-child.svg';
import iconCot from '~/assets/icons/icons8-cup-of-tea.svg';
import iconDes from '~/assets/icons/icons8-desert.svg';
import iconFirst from '~/assets/icons/icons8-first.svg';
import iconGreel from '~/assets/icons/icons8-greel.svg';
import iconInter from '~/assets/icons/icons8-inter.svg';
import iconLech from '~/assets/icons/icons8-lech.svg';
import iconSalads from '~/assets/icons/icons8-salads.svg';
import iconSec from '~/assets/icons/icons8-second.svg';
import iconSnacks from '~/assets/icons/icons8-snacks.svg';
import iconSoup from '~/assets/icons/icons8-soup.svg';
import iconVegan from '~/assets/icons/icons8-vegan.svg';
import iconZag from '~/assets/icons/icons8-zag.svg';
//   import iconRecipe from '~/assets/icons/icons8-recipe.svg';

function Menunos() {
    return (
        <>
            <Hide below='md'>
                <GridItem pl='2' bg='white' w='256px'>
                    <Flex direction='column' justifyContent='space-between' h='calc(100vh - 80px)'>
                        <Accordion overflowY='scroll' allowToggle>
                            {/* Салаты */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconSalads} alt='Салаты' />
                                        Салаты
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мясные салаты
                                        </Box>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Рыбные салаты
                                        </Box>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощные салаты
                                        </Box>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Теплые салаты
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Закуски */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconSnacks} alt='Закуски' />
                                        Закуски
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мясные закуски
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Рыбные закуски
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощные закуски
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Теплые закуски
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Бутерброды
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Фастфуд
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Первые блюда */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconFirst} alt='Первые блюда' />
                                        Первые блюда
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мясные супы
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощные супы
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Бульоны
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Холодные супы
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диетические супы
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Вторые блюда */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='span'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconSec} alt='Вторые блюда' />
                                        Вторые блюда
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мясные
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Рыбные
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощные
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из птицы
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из грибов
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из субпродуктов
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            На пару
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Пельмени, вареники
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мучные гарниры
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощные гарниры
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Пицца
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Суши
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Десерты, выпечка */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconDes} alt='Десерты, выпечка' />
                                        Десерты, выпечка
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Блины и оладьи
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Пироги и пончики
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Торты
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Рулеты
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Кексы и маффины
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Сырники и ватрушки
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из слоеного теста
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из заварного теста
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из дрожжевого теста
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Булочки и сдоба
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Хлеб
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Тесто на пиццу{' '}
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Кремы
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Блюда на гриле */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconGreel} alt='Блюда на гриле' />
                                        Блюда на гриле
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Говядина
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Свинина
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Птица
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Рыба
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Грибы
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощи
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Веганская кухня */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        data-test-id='vegan-cuisine'
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconVegan} alt='Веганская кухня' />
                                        Веганская кухня
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Закуски
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Первые блюда
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Вторые блюда
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Гарниры
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Десерты
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Выпечка
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Сыроедческие блюда
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Напитки
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Детские блюда */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconChild} alt='Детские блюда' />
                                        Детские блюда
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Первые блюда
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Вторые блюда
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Гарниры
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Выпечка
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Без глютена
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Без сахара
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Без аллергенов
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Блюда для прикорма
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Лечебное питание */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconLech} alt='Лечебное питание' />
                                        Лечебное питание
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Детская диета
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №1
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №2
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №3
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №4
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №5
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №6
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №7
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №8
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №9
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №10
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №11
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №12
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №13
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Диета №14
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Без глютена
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Без аллергенов
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Национальные */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconInter} alt='Национальные' />
                                        Национальные
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Американская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Армянская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Греческая кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Грузинская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Итальянская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Испанская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Китайская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мексиканская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Паназиатская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Русская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Турецкая кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Французская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Шведская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Японская кухня
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Другая кухня
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Соусы */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconSoup} alt='Соусы' />
                                        Соусы
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Соусы мясные
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Соусы сырные
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Маринады
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Напитки */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconCot} alt='Напитки' />
                                        Напитки
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Соки и фреши
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Смузи
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Компоты
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Кисели
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Кофе
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Лечебный чай
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Квас
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Коктейли
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Алкогольные
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Заготовки */}
                            <AccordionItem border='none'>
                                <AccordionButton
                                    _expanded={{ bg: '#eaffc7;', fontWeight: '700;' }}
                                    h='48px'
                                    border='none'
                                    p='8px 12px'
                                >
                                    <Box
                                        as='a'
                                        href='/vegan-food'
                                        flex='1'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'
                                    >
                                        <img src={iconZag} alt='Заготовки' />
                                        Заготовки
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex direction='column' justifyContent='left'>
                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Мясные заготовки
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Рыбные заготовки
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из огурцов
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из томатов
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из грибов
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Овощные заготовки
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Салаты, икра
                                        </Box>

                                        <Box
                                            as='a'
                                            href='/vegan-food'
                                            borderLeft='1px solid #c4ff61;'
                                            h='24px;'
                                            m={2}
                                            pl={2}
                                            _hover={{ color: 'red' }}
                                        >
                                            Из фруктов и ягод
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <Box>
                            <Text></Text>
                            <Text
                                fontFamily='var(--font-family)'
                                my='16px 0'
                                color='rgba(0, 0, 0, 0.24)'
                                fontWeight={500}
                            >
                                Версия программы 03.25
                            </Text>
                            <Text
                                color='rgba(0, 0, 0, 0.64)'
                                fontWeight={4500}
                                fontFamily='var(--font-family)'
                            >
                                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                            </Text>
                            <Button
                                leftIcon={
                                    <Icon viewBox='0 0 12 12' color='black'>
                                        <path
                                            fill='currentColor'
                                            d='M8 6.5V5.5H3.5V4L1 6L3.5 8V6.5H8Z'
                                        />
                                        <path
                                            fill='currentColor'
                                            d='M10 1.5H5.5C4.9485 1.5 4.5 1.9485 4.5 2.5V4.5H5.5V2.5H10V9.5H5.5V7.5H4.5V9.5C4.5 10.0515 4.9485 10.5 5.5 10.5H10C10.5515 10.5 11 10.0515 11 9.5V2.5C11 1.9485 10.5515 1.5 10 1.5Z'
                                        />
                                    </Icon>
                                }
                                colorScheme='transparent'
                                color='#000'
                            >
                                Выйти
                            </Button>
                        </Box>
                    </Flex>
                </GridItem>
            </Hide>
        </>
    );
}

export default Menunos;
