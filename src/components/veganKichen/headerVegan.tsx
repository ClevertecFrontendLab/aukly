import { ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    HStack,
    Icon,
    Show,
    Text,
} from '@chakra-ui/react';

import siteLogoBig from '~/assets/logo.svg';
import siteLogoSmall from '~/assets/logoSmall.svg';
import user from '~/assets/user.svg';

function headerVegan() {
    return (
        <>
            <Show above='992px'>
                <HStack data-test-id='header' bg='#FFFFD3' p='16px 0 16px 16px' h='80px'>
                    <Box as='a' href='/' w='256px'>
                        <img src={siteLogoBig} className='logo react' alt='React logo' />
                    </Box>
                    <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        minW='calc(100vw - 256px)'
                    >
                        {/* <Heading ml={2} fontSize='16px' fontWeight='400' lineHeight='150%' >Главная</Heading> */}
                        <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    as='a'
                                    href='/'
                                    fontSize='16px'
                                    fontWeight='400'
                                    lineHeight='150%'
                                >
                                    Главная
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    as='a'
                                    href='/vegan-food'
                                    fontSize='16px'
                                    fontWeight='400'
                                    lineHeight='150%'
                                >
                                    Веганская кухня
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    as='a'
                                    href='/vegan-food'
                                    fontSize='16px'
                                    fontWeight='400'
                                    lineHeight='150%'
                                >
                                    Вторые блюда
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <HStack p='5px'>
                            <img src={user} className='logo react' alt='User logo' />
                            <Box display='flex' flexDirection='column' mr='56px'>
                                <Text fontSize='18px' fontWeight={500} lineHeight='156%'>
                                    Екатерина Константинопольская
                                </Text>
                                <Text
                                    fontSize='14px'
                                    fontWeight={400}
                                    lineHeight='143%'
                                    color='rgba(0, 0, 0, 0.64)'
                                >
                                    @bake_and_pie
                                </Text>
                            </Box>
                        </HStack>
                    </Flex>
                </HStack>
            </Show>
            <Show below='991px'>
                <HStack
                    data-test-id='header'
                    bg='#FFFFD3'
                    p='16px 0 16px 16px'
                    h='64px'
                    justifyContent='space-between'
                >
                    <Box as='a' href='/' target='_blank'>
                        <Show above='md'>
                            <img src={siteLogoBig} className='logo react' alt='React logo' />
                        </Show>
                        <Show below='767px'>
                            <img src={siteLogoSmall} className='logo react' alt='React logo' />
                        </Show>
                    </Box>
                    <HStack>
                        <Button bg='transparent' h='24px' p='4px 8px'>
                            <Icon boxSize={3} viewBox='0 0 12 12' mr={1}>
                                <path
                                    d='M5.99985 3.30749C7.0401 2.23874 9.64035 4.10999 5.99985 6.51524C2.35935 4.10999 4.9596 2.23949 5.99985 3.30899V3.30749Z'
                                    fill='black'
                                />
                                <path
                                    d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
                                    fill='black'
                                />
                            </Icon>
                            <Text
                                color='#2db100;'
                                lineHeight='133%;'
                                fontSize='12px;'
                                fontWeight={600}
                            >
                                185
                            </Text>
                        </Button>
                        <Button bg='transparent' h='24px' p='4px 8px'>
                            <Icon boxSize={3} viewBox='0 0 12 12' mr={1}>
                                <path
                                    d='M5.25 10.5C5.25 10.5 4.5 10.5 4.5 9.75C4.5 9 5.25 6.75 8.25 6.75C11.25 6.75 12 9 12 9.75C12 10.5 11.25 10.5 11.25 10.5H5.25ZM8.25 6C8.84674 6 9.41903 5.76295 9.84099 5.34099C10.2629 4.91903 10.5 4.34674 10.5 3.75C10.5 3.15326 10.2629 2.58097 9.84099 2.15901C9.41903 1.73705 8.84674 1.5 8.25 1.5C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75C6 4.34674 6.23705 4.91903 6.65901 5.34099C7.08097 5.76295 7.65326 6 8.25 6Z'
                                    fill='black'
                                />
                                <path
                                    d='M3.912 10.5C3.80082 10.2659 3.74537 10.0092 3.75 9.75002C3.75 8.73377 4.26 7.68752 5.202 6.96002C4.73182 6.81514 4.24196 6.7443 3.75 6.75002C0.75 6.75002 0 9.00002 0 9.75002C0 10.5 0.75 10.5 0.75 10.5H3.912Z'
                                    fill='black'
                                />
                                <path
                                    d='M3.375 6C3.87228 6 4.34919 5.80246 4.70083 5.45083C5.05246 5.09919 5.25 4.62228 5.25 4.125C5.25 3.62772 5.05246 3.15081 4.70083 2.79917C4.34919 2.44754 3.87228 2.25 3.375 2.25C2.87772 2.25 2.40081 2.44754 2.04917 2.79917C1.69754 3.15081 1.5 3.62772 1.5 4.125C1.5 4.62228 1.69754 5.09919 2.04917 5.45083C2.40081 5.80246 2.87772 6 3.375 6Z'
                                    fill='black'
                                />
                            </Icon>
                            <Text
                                color='#2db100;'
                                lineHeight='133%;'
                                fontSize='12px;'
                                fontWeight={600}
                            >
                                589
                            </Text>
                        </Button>
                        <Button bg='transparent' h='24px' p='4px 8px'>
                            <Icon boxSize={3} viewBox='0 0 12 12' mr={1}>
                                <path
                                    d='M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z'
                                    fill='black'
                                />
                                <path
                                    d='M8.48629 7.51048C8.55748 7.49371 8.63202 7.49814 8.70074 7.5232C8.76945 7.54827 8.82933 7.59288 8.87301 7.65154C8.91669 7.71021 8.94226 7.78037 8.94657 7.85338C8.95089 7.92639 8.93375 7.99908 8.89729 8.06248C8.60113 8.57574 8.175 9.00194 7.66178 9.29818C7.14856 9.59442 6.56636 9.75025 5.97379 9.74998C5.38121 9.75025 4.79901 9.59442 4.28579 9.29818C3.77258 9.00194 3.34644 8.57574 3.05029 8.06248C3.01382 7.99908 2.99668 7.92639 3.001 7.85338C3.00531 7.78037 3.03088 7.71021 3.07456 7.65154C3.11824 7.59288 3.17812 7.54827 3.24684 7.5232C3.31555 7.49814 3.39009 7.49371 3.46129 7.51048H3.46504L3.47779 7.51423L3.52804 7.52548L3.71704 7.56673C3.87829 7.60123 4.10329 7.64773 4.35979 7.69348C4.87954 7.78648 5.50129 7.87498 5.97379 7.87498C6.44629 7.87498 7.06879 7.78648 7.58779 7.69348C7.8662 7.64338 8.14351 7.58737 8.41954 7.52548L8.46979 7.51423L8.48254 7.51123L8.48629 7.50973V7.51048ZM3.56704 3.42448C4.13929 2.35648 6.58204 3.33448 4.28104 5.99998C0.909036 4.80298 2.51854 2.77648 3.56704 3.42448ZM8.43304 3.42448C9.48154 2.77648 11.091 4.80298 7.71904 5.99998C5.41879 3.33448 7.86154 2.35648 8.43304 3.42448Z'
                                    fill='black'
                                />
                            </Icon>
                            <Text
                                color='#2db100;'
                                lineHeight='133%;'
                                fontSize='12px;'
                                fontWeight={600}
                            >
                                587
                            </Text>
                        </Button>
                        <Button bg='transparent' h='48px' py='12px'>
                            <Icon as={HamburgerIcon} />
                        </Button>
                    </HStack>
                </HStack>
            </Show>
        </>
    );
}

export default headerVegan;
