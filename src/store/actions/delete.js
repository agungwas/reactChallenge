export default function del (data) {
  return { type: 'delete', ...data }
}