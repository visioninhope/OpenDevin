from opendevin.events import Event


class Observation(Event):
    observation: str
    content: str

    def to_memory(self) -> dict:
        """Converts the observation to a dictionary."""
        extras = super().to_memory()
        content = extras.pop('content', '')
        observation = extras.pop('observation', '')
        return {
            'observation': observation,
            'content': content,
            'extras': extras,
        }


