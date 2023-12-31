import { BooksContextWrapper } from './books';
import { AuthorsContextWrapper } from './authors';
import { TopicsContextWrapper } from './topics';
import { ModalContextWrapper } from './modal';
import { AlertContextWrapper } from './alert';

export const ContextWrapper = ({ children }) => (
  <BooksContextWrapper>
    <AuthorsContextWrapper>
      <TopicsContextWrapper>
        <ModalContextWrapper>
          <AlertContextWrapper>
            {children}
          </AlertContextWrapper>
        </ModalContextWrapper>
      </TopicsContextWrapper>
    </AuthorsContextWrapper>
  </BooksContextWrapper>
)
