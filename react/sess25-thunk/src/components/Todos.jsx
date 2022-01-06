import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Todos () {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => todos)

  useEffect(() => {
    // dispatch
  })
}
