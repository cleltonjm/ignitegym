import { useState } from 'react';
import { Heading, VStack, SectionList } from  'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';


export function History() {
    const [exercises, setExercise] = useState([
        {
            title: "31.01.2023",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "05.02.2023",
            data: ["Puxada frontal"]
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />

            <SectionList 
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
            />
        </VStack>
    );
}