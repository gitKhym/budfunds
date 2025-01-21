import { SplitInvolvement } from "@/enums";
export const fetchSplitGroups = async (userId: string) => {
  const res = await fetch(`/(api)/users/${userId}/split-groups`);
  return await res.json();
};

export const fetchGroup = async (userId: string, splitGroupId: string) => {
  const res = await fetch(
    `/(api)/users/${userId}/split-groups/${splitGroupId}`,
  );
  return await res.json();
};

export const fetchSplits = async (
  userId: string,
  splitGroupId: string,
  involvement: SplitInvolvement,
) => {
  var res: Response;
  switch (involvement) {
    case SplitInvolvement.AUTHORING:
      res = await fetch(
        `/(api)/users/${userId}/split-groups/${splitGroupId}/splits?userInvolvement=authoring`,
      );

      return await res.json();
    case SplitInvolvement.PARTICIPATING:
      res = await fetch(
        `/(api)/users/${userId}/split-groups/${splitGroupId}/splits?userInvolvement=participating`,
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        },
      );

      return await res.json();
    default:
      return new Error("Error fetching splits");
  }
};

export const fetchSplitsPage = async (
  userId: string,
  splitGroupId: string,
  involvement: SplitInvolvement,
) => {
  try {
    // Fetch group details
    const groupRes = await fetch(
      `/(api)/users/${userId}/split-groups/${splitGroupId}`,
    );
    const group = await groupRes.json();

    // Fetch splits based on involvement
    let splitsRes: Response;
    switch (involvement) {
      case SplitInvolvement.AUTHORING:
        splitsRes = await fetch(
          `/(api)/users/${userId}/split-groups/${splitGroupId}/splits?userInvolvement=authoring`,
        );
        break;
      case SplitInvolvement.PARTICIPATING:
        splitsRes = await fetch(
          `/(api)/users/${userId}/split-groups/${splitGroupId}/splits?userInvolvement=participating`,
          {
            headers: { "Content-Type": "application/json; charset=UTF-8" },
          },
        );
        break;
      default:
        throw new Error("Invalid involvement type");
    }

    const splits = await splitsRes.json();

    // Return combined result
    return { group, splits };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
