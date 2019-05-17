import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, waitForElement } from 'react-testing-library';
import List from '../List';


describe('List: ', () => {

    beforeEach(function() {
        global.fetch = jest.fn().mockImplementation(() => {
            var p = new Promise((resolve, reject) => {
              resolve({
                ok: true, 
                Id: '123', 
                json: function() { 
                  return {
                      data: {
                          children : [
                              {
                                  data: {
                                        title: 'title',
                                        url: 'url',
                                        subreddit_name_prefixed: 'sub',
                                        score: 1,
                                  }
                              }
                          ]
                      }
                }
                }
              });
            });
            return p;
        });
    });

    afterEach(cleanup);

    it('Shows loading when useFetch is called', async () => {
        const { getByTestId } = render(<List />);

        expect(getByTestId('loading')).toHaveTextContent('Loading...');
    });

    it('Shows the post title, when json data from fetch is the expected from the component (typescript)', async () => {
        const { getByTestId } = render(<List />);

        const titleEl = await waitForElement(() => getByTestId('postData-0-title'));

        expect(titleEl).toHaveTextContent('title');
    });

    it('Shows error when fetch call is rejected', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            var p = new Promise((resolve, reject) => {
              reject(new Error('foo'));
            });
            return p;
        });

        const { getByTestId } = render(<List />);

        const errorEl = await waitForElement(() => getByTestId('error'));

        expect(errorEl).toHaveTextContent('Error');
    });
});
