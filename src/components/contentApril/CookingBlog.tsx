import { Heading, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';

const CookingBlog = (props) => {
    const { blogs = [] } = props;

    return (
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={[1, 2, 3, 5]}>
            {blogs.map((blog) => (
                <VStack
                    key={blog.title}
                    bg='#fff'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                    alignItems='flex-start'
                    _hover={{
                        boxShadow:
                            '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                    }}
                >
                    <HStack
                        p={[
                            '16px 16px 16px 8px',
                            '16px 16px 16px 8px',
                            '16px 16px 8px 8px',
                            '16px 16px 8px 8px',
                            '16px 16px 8px 8px',
                            '24px 24px 24px 16px',
                        ]}
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            boxSize={['32px', '32px', '32px', '48px']}
                        />
                        <VStack alignItems='flex-start' gap='0'>
                            <Heading
                                fontWeight={500}
                                fontSize={['15px', '15px', '16px', '18px']}
                                lineHeight={['150%', '150%', '150%', '156%']}
                                noOfLines={1}
                                textAlign='left'
                            >
                                {blog.title}
                            </Heading>
                            <Heading
                                fontWeight={400}
                                fontSize={['12px', '12px', '12px', '14px']}
                                lineHeight={['133%', '133%', '133%', '143%']}
                                color='rgba(0, 0, 0, 0.64)'
                            >
                                {blog.social}
                            </Heading>
                        </VStack>
                    </HStack>
                    <Text
                        noOfLines={3}
                        fontWeight={400}
                        fontSize='14px'
                        lineHeight='143%'
                        textAlign='left'
                        p={[
                            '8px 16px 16px 16px',
                            '8px 16px 16px 16px',
                            '0px 8px 8px 8px',
                            '0px 8px 8px 8px',
                            '0px 8px 8px 8px',
                            '12px 24px 20px 24px',
                        ]}
                    >
                        {blog.body}
                    </Text>
                </VStack>
            ))}
        </SimpleGrid>
    );
};
export { CookingBlog };
