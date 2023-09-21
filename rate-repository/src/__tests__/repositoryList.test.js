import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
        };
        
        render(<RepositoryListContainer repositories={repositories} />)
        
        

     const repositoryItems = screen.getAllByTestId('repositoryItem');
        const [
            firstRepositoryItem,
            secondRepositoryItem,
            thirdRepositoryItem,
            fourthRepositoryItem,
            fifthRepositoryItem,
            sixthRepositoryItem,
            seventhRepositoryItem,
            eighthRepositoryItem,
            ninthRepositoryItem,
            tenthRepositoryItem,
            eleventhRepositoryItem,
            twelfthRepositoryItem,
            thirteenthRepositoryItem,
            fourteenthRepositoryItem,
            fifteenthRepositoryItem,
            sixteenthRepositoryItem,
            seventeenthRepositoryItem,
            eighteenthRepositoryItem,
            nineteenthRepositoryItem,
            twentiethRepositoryItem,
            twentiethFirstRepositoryItem,
            twentiethSecondRepositoryItem,
            
        ] = repositoryItems;

       
        
        expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik')
        expect(secondRepositoryItem).toHaveTextContent('Build forms in React, without the tears')
        expect(thirdRepositoryItem).toHaveTextContent('TypeScript')
        expect(fourthRepositoryItem).toHaveTextContent('21.9k')
        expect(fifthRepositoryItem).toHaveTextContent('Stars')
        expect(sixthRepositoryItem).toHaveTextContent('1.6k')
        expect(seventhRepositoryItem).toHaveTextContent('Forks')
        expect(eighthRepositoryItem).toHaveTextContent('3')
        expect(ninthRepositoryItem).toHaveTextContent('Reviews')
        expect(tenthRepositoryItem).toHaveTextContent('88')
        expect(eleventhRepositoryItem).toHaveTextContent('Rating')
        expect(twelfthRepositoryItem).toHaveTextContent('async-library/react-async')
        expect(thirteenthRepositoryItem).toHaveTextContent('Flexible promise-based React data loader')
        expect(fourteenthRepositoryItem).toHaveTextContent('JavaScript')
        expect(fifteenthRepositoryItem).toHaveTextContent('1.8k')
        expect(sixteenthRepositoryItem).toHaveTextContent('Stars')
        expect(seventeenthRepositoryItem).toHaveTextContent('69')
        expect(eighteenthRepositoryItem).toHaveTextContent('Forks')
        expect(nineteenthRepositoryItem).toHaveTextContent('3')
        expect(twentiethRepositoryItem).toHaveTextContent('Reviews')
        expect(twentiethFirstRepositoryItem).toHaveTextContent('72')
        expect(twentiethSecondRepositoryItem).toHaveTextContent('Rating')


    });
  });
});