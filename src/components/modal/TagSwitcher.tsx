import { Container } from '@react-three/uikit';
import Tag from '../ui/Tag';
import { Priority } from '../../types/Todo';

interface TagStyles {
  selected: {
    backgroundColor: string;
    borderColor: string;
  };
  default: {
    backgroundColor: string;
    borderColor: string;
  };
}

interface TagSwitcherProps {
  selectedTag: Priority;
  onTagSelect: (tag: Priority) => void;
  styles?: TagStyles;
}

export const TagSwitcher = ({ 
  selectedTag, 
  onTagSelect,
  styles = {
    selected: {
      backgroundColor: "#3b82f622",
      borderColor: "#3b82f6",
    },
    default: {
      backgroundColor: "transparent",
      borderColor: "#9ca3af",
    },
  },
}: TagSwitcherProps) => {
  const tags: Priority[] = ['low', 'medium', 'high'];

  return (
    <Container
      flexDirection="row"
      gap={10}
      alignItems="center"
      justifyContent="center"
      width="100%"
      paddingY={10}
    >
      {tags.map((tag) => {
        const isSelected = selectedTag === tag;
        const style = isSelected ? styles.selected : styles.default;

        return (
          <Container
            key={tag}
            onClick={(e) => {
              e.stopPropagation();
              onTagSelect(tag);
            }}
            backgroundColor={style.backgroundColor}
            borderWidth={1}
            borderColor={style.borderColor}
            borderRadius={12}
            padding={1}
          >
            <Tag 
              priority={tag} 
              selected={isSelected}
              interactive={true}
            />
          </Container>
        );
      })}
    </Container>
  );
};
