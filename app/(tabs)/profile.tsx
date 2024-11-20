import { ThemedText, ThemedView } from '@/components/layouts';
import colors from 'tailwindcss/colors';

export default function Profile() {
  return (
    <ThemedView className="flex-1">
      <ThemedView className="h-64 overflow-hidden bg-[#D0D0D0] dark:bg-[#353636]">
        <ThemedText>text</ThemedText>
      </ThemedView>
      <ThemedView className="flex-1 p-8 gap-4 overflow-hidden">
        <ThemedText>children</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
