import { Container } from '@react-three/uikit';
import Tag from '../ui/Tag';
import { Priority } from '../../types/Todo';

interface TagSwitcherProps {
  selectedTag: Priority;
  onTagSelect: (tag: Priority) => void;
}

export const TagSwitcher = ({ 
  selectedTag, 
  onTagSelect 
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
      {tags.map((tag) => (
        <Container
          key={tag}
          onClick={(e) => {
            e.stopPropagation();
            onTagSelect(tag);
          }}
        >
          <Tag 
            priority={tag} 
            selected={selectedTag === tag}
            interactive={true}
          />
        </Container>
      ))}
    </Container>
  );
};
