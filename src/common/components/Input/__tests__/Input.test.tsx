import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '..';

const itemList: string[] = ['task 1', 'task 2', 'task 3', 'task 4'];

describe('Common: App Item input', () => {
  it('should render the todo list item with a task', async () => {
    render(<Input value="Task to do" />);

    const itemTask = await screen.findByDisplayValue('Task to do');

    expect(itemTask).toBeInTheDocument();
  });

  it('should render multiple todo list items with tasks', async () => {
    render(
      <div>
        {itemList.map((item: string, index: number) => (
          <Input key={index} value={item} />
        ))}
      </div>
    );

    for (const task of itemList) {
      const itemTask = await screen.findByDisplayValue(task);
      expect(itemTask).toBeInTheDocument();
    }
  });
});
