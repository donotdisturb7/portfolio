import { Flex, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
    return (
        <Flex
            as="section"
            direction="column" alignItems="center">
            <Text
                marginBottom="s"
                variant="display-strong-xl">
                404
            </Text>
            <Heading
                marginBottom="l"
                variant="display-strong-xs">
                Page non trouvée
            </Heading>
            <Text
                onBackground="neutral-weak">
                La page que vous recherchez n'existe pas.
            </Text>
        </Flex>
    )
}