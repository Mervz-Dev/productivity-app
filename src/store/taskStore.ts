import {create} from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Task} from '@/types/task'

interface TaskState {
  tasks: Array<Task>
  addTask: (task: Task) => void
}

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      set => ({
        tasks: [],
        addTask: (task: Task) =>
          set(state => ({tasks: [...state.tasks, task]})),
      }),
      {
        name: 'task-storage',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)
